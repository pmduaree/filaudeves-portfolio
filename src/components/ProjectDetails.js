import React from "react"
import PropTypes from "prop-types"
import style from "../styles/projectDetails.module.css"

const ProjectDetails = ({detailsTitle, detailsText, detailsImage}) => (
    <>
      <div className={'row'}>
        <div className={'one column'}/>
        <div className={'ten columns'}>
          <div className={style.detailsTitle}>
            {detailsTitle}
          </div>
          <div className={style.detailsText}>
            {detailsText}
          </div>
        </div>
      </div>
      <div className={'row'}>
        <div className={'two columns'}/>
        <div className={'eight columns'}>
          <img src={detailsImage}/>
        </div>
      </div>
    </>
  )
;

ProjectDetails.propTypes = {
  detailsTitle: PropTypes.string.isRequired,
  detailsText: PropTypes.string.isRequired,
  detailsImage: PropTypes.node.isRequired,
};

export default ProjectDetails;
