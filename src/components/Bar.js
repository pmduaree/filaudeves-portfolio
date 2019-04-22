import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Bar.module.css'

const Bar = (props) => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <span>{props.label}</span>
        <span>{props.value}%</span>
      </div>
      <div className={style.barContainer}>
        <div className={style.barBackground}/>
        <div className={style.barValue} style={{width: `${props.value}%`}}/>
      </div>
    </div>
  )
};

Bar.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Bar;