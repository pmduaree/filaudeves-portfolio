import React from "react"

import Layout from "../components/Layout"
import AboutMeSidebar from "../components/AboutMeSidebar";
import {SECTIONS} from "../data/aboutMeSections";
import AboutMeSection from "../components/AboutMeSection";
import style from "../styles/about-me.module.css"

const AboutMePage = () => (
  <Layout selectedPage={'about-me'}>
    <div className={'row'}>
      <div className={['four columns', style.sidebar].join(' ')}>
        <AboutMeSidebar/>
      </div>
      <div className={'eight columns'}>
        <AboutMeSection section={SECTIONS.PROFILE}/>
      </div>
    </div>
  </Layout>
);

export default AboutMePage
