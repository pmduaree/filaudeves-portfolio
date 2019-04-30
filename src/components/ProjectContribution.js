import React from "react"
import PropTypes from "prop-types"
import style from "../styles/projectContribution.module.css"

const ProjectContribution = ({contributionImage, contributionList}) => (
  <div className={'row'}>
    <div className={'six columns'}>
      <img className={style.contributionImage} src={contributionImage.publicURL}/>
    </div>
    <div className={'five columns'}>
      <h2>Contribution:</h2>
      <ul className={'unordered-list'}>
      {contributionList.map((contribution, index) => (
        <li key={index}>{contribution}</li>
      ))}
      </ul>
    </div>
  </div>
);

ProjectContribution.propTypes = {
  contributionList: PropTypes.array.isRequired,
  contributionImage: PropTypes.object.isRequired
};

export default ProjectContribution;
