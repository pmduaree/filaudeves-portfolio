import React  from "react"
import PropTypes from "prop-types"
import style from "../styles/workHeader.module.css"

const WorkHeader = ({title, subtitle}) => (
  <div className={'row'}>
    <div className={'one column'}/>
    <div className={'eight columns'}>
      <div className={style.mainTitle}>{title}</div>
      <div className={style.mainSubtitle}>{subtitle}</div>
    </div>
  </div>
  )
;

WorkHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default WorkHeader;
