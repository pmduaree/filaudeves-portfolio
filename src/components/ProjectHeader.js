import React from "react"
import PropTypes from "prop-types"

const ProjectHeader = ({title, subtitle}) => (
  <div className={'row'}>
    <div className={'one column'}>&nbsp;</div>
    <div className={'ten columns'}>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  </div>
);

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectHeader;
