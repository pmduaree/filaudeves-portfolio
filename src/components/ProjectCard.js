import React  from "react"
import PropTypes from "prop-types"
import style from "../styles/projectCard.module.css"
import {Link} from "gatsby"

const ProjectCard = (props) => {
  return (
    <Link to={props.id} className={style.container}>
      <img className={style.image} src={props.imageUrl}/>
      <span className={style.information}>
          <div className={style.name}>{props.name}</div>
          <div className={style.subtitle}>{props.subtitle}</div>
        </span>
    </Link>
  )
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default ProjectCard;
