import React from "react"
import PropTypes from "prop-types"
import style from "../styles/ProjectHeader.module.css"

const ProjectHeader = ({title, subtitle}) => (
  <div className={'row'}>
    <div className={'one column'}>&nbsp;</div>
    <div className={'ten columns'}>
      <h1 className={style.title}>{title}</h1>
      <h4 className={style.subtitle}>{subtitle}</h4>
    </div>
  </div>
);

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectHeader;
