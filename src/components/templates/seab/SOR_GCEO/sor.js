import { TEMPLATE_ESOR } from "../common/template";
import React from "react";
import PropTypes from "prop-types";

const Template = document => (
  <span>{TEMPLATE_ESOR(document, "GCEO", "O")}</span>
);

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};

export default Template;
