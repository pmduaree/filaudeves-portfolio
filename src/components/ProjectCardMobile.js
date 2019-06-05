import React  from "react"
import PropTypes from "prop-types"
import style from "../styles/projectCardMobile.module.css"
import {Link} from "gatsby"

const ProjectCardMobile = (props) => {
  return (
    <Link to={props.id}>
      <img className={style.image} src={props.imageUrl}/>
      <div className={style.name}>{props.name}</div>
      <div className={style.subtitle}>{props.subtitle}</div>
    </Link>
  )
};

ProjectCardMobile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectCardMobile;
