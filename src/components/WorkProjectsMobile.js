import React from "react"
import PropTypes from "prop-types"
import ProjectCardMobile from "./ProjectCardMobile";

const WorkProjectsMobile = (props) => {
  return (
    <div className={""}>
      {props.currentProjects.map((project, index) => (
        <div className={["row"].join(' ')} key={index}>
            <ProjectCardMobile
              id={project.id}
              name={project.name}
              imageUrl={project.imageUrl}
              subtitle={project.subtitle}
            />
        </div>
      ))}
    </div>
  )

};

WorkProjectsMobile.propTypes = {
  currentProjects: PropTypes.array.isRequired,
};

export default WorkProjectsMobile;
