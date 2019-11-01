// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import SORGCEO from "./seab/SOR_GCEO";
import SORGCEN from "./seab/SOR_GCEN_before_2008";
import SORGCENNA from "./seab/SOR_GCEN_NA_2008";
import SORGCENNT from "./seab/SOR_GCEN_NT_2008";
import SORGCEABefore2002 from "./seab/SOR_GCEA_before_2002";
import SORGCEA20022005 from "./seab/SOR_GCEA_2002_2005";
import SORGCEA2 from "./seab/SOR_GCEA_2006_OldSyll";
import SORGCEA3 from "./seab/SOR_GCEA_2006_NewSyll";
import SORPSLE19801981 from "./seab/SOR_PSLE_1980_1981";
import SORPSLE19821992 from "./seab/SOR_PSLE_1982_1992";
import SORPSLE2013 from "./seab/SOR_PSLE_2013";
import SORPSLE19932012 from "./seab/SOR_PSLE_1993_2012";
import SORPSLEBefore1979 from "./seab/SOR_PSLE_before_1979";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert, SOR_GCEO: SORGCEO,
  SOR_GCEN_before_2008: SORGCEN,
  SOR_GCEN_NA_2008: SORGCENNA,
  SOR_GCEN_NT_2008: SORGCENNT,
  SOR_GCEA_before_2002: SORGCEABefore2002,
  SOR_GCEA_2002_2005: SORGCEA20022005,
  SOR_GCEA_2006_OldSyll: SORGCEA2,
  SOR_GCEA_2006_NewSyll: SORGCEA3,
  SOR_PSLE_1980_1981: SORPSLE19801981,
  SOR_PSLE_1982_1992: SORPSLE19821992,
  SOR_PSLE_2013: SORPSLE2013,
  SOR_PSLE_before_1979: SORPSLEBefore1979,
  SOR_PSLE_1993_2012: SORPSLE19932012,
  NULL: []
};
