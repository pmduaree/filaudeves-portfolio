import React, {useState} from "react"
import PropTypes from 'prop-types';
import {SECTIONS} from "../data/aboutMeSections";
import style from '../styles/AboutMeSection.module.css'
import AboutMeSectionHeader from "./AboutMeSectionHeader";
import AboutMeProfile from "./AboutMeProfile";
import AboutMeSkills from "./AboutMeSkills";
import AboutMeStats from "./AboutMeStats";
import ContactMe from "./ContactMe";

const AboutMeSection = (props) => {
  const [section, setSection] = useState(props.section);

  const renderSection = () => {
    switch(section) {
      case SECTIONS.PROFILE:
      default:
        return <AboutMeProfile/>;
      case SECTIONS.SKILLS:
        return <AboutMeSkills/>;
      case SECTIONS.STATS:
        return <AboutMeStats/>;
      case SECTIONS.CONTACT:
        return <ContactMe/>
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
