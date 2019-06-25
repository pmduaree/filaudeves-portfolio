import React from "react"
import PropTypes from "prop-types"
import style from "../styles/workProjects.module.css"
import Masonry from "react-masonry-component";

import ProjectCard from "./ProjectCard";

const WorkProjects = (props) => {
  const masonryOptions = {
    transitionDuration: 400
  };

  const childElements = props.currentProjects.map((project, index) => (
      <div key={index}>
        <ProjectCard
          id={project.id}
          name={project.name}
          imageUrl={project.imageUrl}
          subtitle={project.subtitle}
        />
      </div>
    ));

  return (
    <div className={style.container}>
      <Masonry
        options={masonryOptions}
      >
        {childElements}
      </Masonry>
    </div>
  )
};

WorkProjects.propTypes = {
  currentProjects: PropTypes.array.isRequired,
};

export default WorkProjects;
