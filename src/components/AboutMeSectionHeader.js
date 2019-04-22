import React from "react"
import PropTypes from 'prop-types';
import {SECTIONS} from "../data/aboutMeSections";
import style from '../styles/AboutMeSectionHeader.module.css'

const AboutMeSectionHeader = (props) => {
  return (
    <div className={'row'}>
      {Object.values(SECTIONS).map((section, index) =>
        (<div
          onClick={() => props.setSection(section)}
          className={[style.section, 'three columns'].join(' ')}
          key={index}
        >
          <a className={[style.text, props.section === section ? 'selected' : ''].join(' ')}> {section.name}</a>
        </div>)
      )}
    </div>
  )
};

AboutMeSectionHeader.props = {
  setSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired
};

export default AboutMeSectionHeader;
