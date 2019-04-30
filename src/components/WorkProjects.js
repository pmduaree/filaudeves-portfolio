import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workProjects.module.css"

import ProjectCard from "./ProjectCard";
import {PROJECT_TYPES, PROJECTS} from "../data/projects";
import {arrayIntoSectionsOfTwo} from "../../utils/utils";

const WorkProjects = (props) => {
  const filterProjects = () => {
    const projects = PROJECTS;

    let filteredProjects = [];
    const currentProjectType = props.currentProjectType;
    if (currentProjectType === PROJECT_TYPES.ALL_PROJECTS.name) {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter((project) => project.type === currentProjectType);
    }
    return arrayIntoSectionsOfTwo(filteredProjects);
  };

  return (
    <div className={style.container}>
      {filterProjects().map((projectRow, rowIndex) => (
        <div className={["row", style.projectRow].join(' ')} key={rowIndex}>
          {projectRow.map((project, index) => (
            <ProjectCard
              key={index}
              id={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              subtitle={project.subtitle}
            />
          ))}
        </div>
      ))}
    </div>
  )
};

WorkProjects.propTypes = {
  currentProjectType: PropTypes.string.isRequired,
};

export default WorkProjects;
