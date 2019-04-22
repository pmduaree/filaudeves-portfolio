import React, {useState} from "react"
import PropTypes from 'prop-types';
import {SECTIONS} from "../data/aboutMeSections";
import AboutMeSectionHeader from "./AboutMeSectionHeader";
import AboutMeProfile from "./AboutMeProfile";
import style from '../styles/AboutMeSection.module.css'
import AboutMeSkills from "./AboutMeSkills";

const AboutMeSection = (props) => {
  const [section, setSection] = useState(props.section);

  const renderSection = () => {
    switch(section) {
      case SECTIONS.PROFILE:
        return <AboutMeProfile/>;
      case SECTIONS.SKILLS:
        return <AboutMeSkills/>;
    }
  };

  return (
    <div className={'row'}>
      <AboutMeSectionHeader
        setSection={setSection}
        section={section}
      />
      <div className={style.section}>
        {renderSection()}
      </div>
    </div>
  )
};

AboutMeSection.props = {
  section: PropTypes.string.isRequired
};

export default AboutMeSection;
