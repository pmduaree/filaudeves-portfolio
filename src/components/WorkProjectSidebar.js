import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workingProjectSidebar.module.css"
import {PROJECT_TYPES} from "../data/projects";


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
    <div>
      {projectTypeDisplay().map((projectType, index) => {
        return (<div key={index}>
            <a onClick={() => props.setCurrentProjectType(projectType.name)}
               className={[style.projectType, projectType.isSelected ? 'selected' : ''].join(' ')}>
              {projectType.display}
            </a>
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
