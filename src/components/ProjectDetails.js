import React from "react"
import PropTypes from "prop-types"
import style from "../styles/projectDetails.module.css"

const ProjectDetails = ({detailsTitle, detailsText, detailsImage, detailsText2}) => (
    <div id={'projectDetails'}>
      <div className={'row'}>
        <div className={'one column'}>&nbsp;</div>
        <div className={'ten columns'}>
          <h2>{detailsTitle}</h2>
          <div className={style.detailsText} dangerouslySetInnerHTML={{__html: detailsText}}/>
        </div>
      </div>
      <div className={'row'}>
        <div className={'two columns'}>&nbsp;</div>
        <div className={'eight columns'}>
          <img className={style.detailsImage} src={detailsImage.publicURL}/>
        </div>
      </div>
      <div className={'row'}>
        <div className={'one column'}>&nbsp;</div>
        <div className={'ten columns'}>
          <div className={style.detailsText}>{detailsText2}</div>
        </div>
      </div>
    </div>
  )
;

ProjectDetails.propTypes = {
  detailsTitle: PropTypes.string.isRequired,
  detailsText: PropTypes.string.isRequired,
  detailsImage: PropTypes.object.isRequired,
  detailsText2: PropTypes.string
};

export default ProjectDetails;
