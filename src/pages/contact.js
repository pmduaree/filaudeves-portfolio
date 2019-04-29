import React from "react"

import Layout from "../components/Layout"
import ContactMe from "../components/ContactMe";

const Contact = (props) => {
  return (
    <Layout pathName={props.location.pathname}>
      <div className={'row'}>
        <div className={'two columns'}>&nbsp;</div>
        <div className={'eight columns'}>
          <h2>Contact Me</h2>
          <ContactMe/>
        </div>
      </div>
    </Layout>
  )
};

export default Contact
