import React from "react"
import PropTypes from "prop-types"
import style from "../styles/projectContribution.module.css"

const ProjectContribution = ({contributionImage, contributionList}) => (
  <div className={'row'}>
    <div className={'six columns'}>
      <img className={style.contributionImage} src={contributionImage.childImageSharp.fluid.src}/>
    </div>
    <div className={'five columns'}>
      <h2>Contribution:</h2>
      <ul>
      {contributionList.map((contribution, index) => (
        <li key={index}>{contribution}</li>
      ))}
      </ul>
    </div>
  </div>
);

ProjectContribution.propTypes = {
  contributionList: PropTypes.string.isRequired,
  contributionImage: PropTypes.string.isRequired
};

export default ProjectContribution;
