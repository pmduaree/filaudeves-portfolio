import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workProjects.module.css"

import ProjectCard from "./ProjectCard";
import {PROJECT_TYPES, PROJECTS} from "../data/projects";

const WorkProjects = (props) => {
  const filterProjects = () => {
    const projects = PROJECTS;

    const currentProjectType = props.currentProjectType;
    if (currentProjectType === PROJECT_TYPES.ALL_PROJECTS.name) {
      return projects;
    } else {
      return projects.filter((project) => project.type === currentProjectType);
    }
  };

  return (
    <div className={style.container}>
      {filterProjects().map((project, index) => {
        return <ProjectCard
          key={index}
          id={project.id}
          name={project.name}
          imageUrl={project.imageUrl}
          subtitle={project.subtitle}
        />
      })}
    </div>
  )
};

WorkProjects.propTypes = {
  currentProjectType: PropTypes.string.isRequired,
};

export default WorkProjects;
