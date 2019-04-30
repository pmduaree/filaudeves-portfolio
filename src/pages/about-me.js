import React from "react"

import Layout from "../components/Layout"
import AboutMeSidebar from "../components/AboutMeSidebar";
import {SECTIONS} from "../data/aboutMeSections";
import AboutMeSection from "../components/AboutMeSection";

const AboutMePage = () => (
  <Layout selectedPage={'about-me'}>
    <div className={'row'}>
      <div className={'four columns'}>
        <AboutMeSidebar/>
      </div>
      <div className={'eight columns'}>
        <AboutMeSection section={SECTIONS.PROFILE}/>
      </div>
    </div>
  </Layout>
);

export default AboutMePage
