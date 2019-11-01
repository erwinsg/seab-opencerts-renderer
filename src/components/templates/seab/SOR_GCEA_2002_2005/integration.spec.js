import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";
import { getData } from "@govtechsg/open-attestation";

fixture("Singapore Examinations and Assessment Board (SOR_GCEA_2002_2005)").page`http://localhost:3000/`;

const Certificate = "./SOR_ALL-2002_GCEA_30111602.opencert";
const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (_prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("sg/gov/seab/SOR_GCEA_2002_2005 is rendered correctly", async t => {
  // Inject javascript and execute window.openAttestation.renderDocument
  const certificateContent = getData(
    JSON.parse(readFileSync(join(__dirname, Certificate)).toString())
  );
  await t.eval(
    () => window.openAttestation.renderDocument(certificateContent),
    {
      dependencies: { certificateContent }
    }
  );

  // Check content of window.openAttestation.templates
  await t.wait(500);
  const templates = await t.eval(() => window.openAttestation.getTemplates());
  await t
    .expect(templates)
    .eql([
      { id: "sor", label: "Statement of Results" },
      { id: "explanatorydtl", label: "Explanatory Notes" }
    ]);

  // Validate content of first tab
  await validateTextContent(t, RenderedCertificate, [
    "I certify that in the",
    "Examination held in the year",
    "Candidate",
    "NRIC/Foreign Identification No.",
    "Index No.",
    "obtained the grades for the subjects stated below:",
    "SUBJECT",
    "GRADE",
    "LEVEL",
    "Total number of subjects recorded:",
    "This statement is issued to",
    "Singapore Examinations and Assessment Board",
    "SINGAPORE-CAMBRIDGE GENERAL CERTIFICATE OF EDUCATION ADVANCED LEVEL",
    "3011/1602",
    "ONE",
    "Chief Executive"
  ]);

  // Navigate to next tab using window.openAttestation.selectTemplateTab
  await t.eval(() => window.openAttestation.selectTemplateTab(1));

  // Validate content of second tab
  await validateTextContent(t, RenderedCertificate, [
    "EXPLANATORY NOTES",
    "REMARKS",
    "As of 2002, subjects taken under access arrangements are annotated with the following symbols:",
    "Fail"
  ]);

});