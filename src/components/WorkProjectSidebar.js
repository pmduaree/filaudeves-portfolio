import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workingProjectSidebar.module.css"

import {PROJECT_TYPES} from "../utils/portofolio_utils";

const WorkProjectSidebar = (props) => {

  const projectTypeDisplay = () => {
    return Object.values(PROJECT_TYPES).map((projectType) => {
      return {
        name: projectType.name,
        display: projectType.display,
        isSelected: props.currentProjectType === projectType.name
      }
    });
  };
  return (
    <div className={style.container}>
      {projectTypeDisplay().map((projectType, index) => {
        return (<div className={style.projectType}>
            <span onClick={() => props.setCurrentProjectType(projectType.name)} key={index} className={projectType.isSelected ? 'selected' : ''}> {projectType.display} </span>
        </div>)
      })}
    </div>
  )
};

WorkProjectSidebar.propTypes = {
  currentProjectType: PropTypes.string.isRequired,
  setCurrentProjectType: PropTypes.func.isRequired
};

export default WorkProjectSidebar;
