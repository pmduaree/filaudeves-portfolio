import React from 'react';
import PropTypes from "prop-types"
import Bar from "./Bar";
import style from '../styles/AboutMeTool.module.css'

const AboutMeTool = (props) => {
  return (
    <div className={style.container}>
      <img src={props.icon} className={style.image}/>
      <Bar label={props.name} value={props.value}/>
    </div>
  );
};

AboutMeTool.propType = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired
}

export default AboutMeTool;