import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import style from "../styles/layout.module.css"
import '../styles/normalize.css'
import '../styles/skeleton.css'
import '../styles/main.css'

const Layout = (props) => (
  <div className={'container'}>
    <Header className={'row'} pathName={props.pathName}/>
    <div className={style.container}>
      <main>{props.children}</main>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathName: PropTypes.string
};

export default Layout
