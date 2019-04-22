import React from "react"

import Layout from "../components/Layout"
import AboutMeSidebar from "../components/AboutMeSidebar";

const AboutMePage = (props) => (
  <Layout pathName={props.location.pathname}>
    <div className={'row'}>
      <div className={'four columns'}>
        <AboutMeSidebar/>
      </div>
      <div className={'eight columns'}>
        placeholder
      </div>
    </div>
  </Layout>
);

export default AboutMePage
