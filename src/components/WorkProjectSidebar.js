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
      {projectTypeDisplay().map((projectType, index) => (
        <div key={index} className={'row'}>
          <div className={[style.projectType, 'twelve columns'].join(' ')}>
            <span className={[style.text, projectType.isSelected ? 'link-selected' : ''].join(' ')}
                  onClick={() => props.setCurrentProjectType(projectType.name)}>
              {projectType.display}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
};

WorkProjectSidebar.propTypes = {
  currentProjectType: PropTypes.string.isRequired,
  setCurrentProjectType: PropTypes.func.isRequired
};

export default WorkProjectSidebar;
