import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workProjects.module.css"

import ProjectCard from "./ProjectCard";
import {arrayIntoSectionsOfTwo} from "../../utils/utils";

const WorkProjects = (props) => {
  return (
    <div className={style.container}>
      {arrayIntoSectionsOfTwo(props.currentProjects).map((projectRow, rowIndex) => (
        <div className={["row", style.projectRow].join(' ')} key={rowIndex}>
          {projectRow.map((project, index) => (
            <div className={'six columns'} key={index}>
              <ProjectCard
                id={project.id}
                name={project.name}
                imageUrl={project.imageUrl}
                subtitle={project.subtitle}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
};

WorkProjects.propTypes = {
  currentProjects: PropTypes.array.isRequired,
};

export default WorkProjects;
