import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import style from "../styles/layout.module.css"
import '../styles/normalize.css'
import '../styles/skeleton.css'
import '../styles/main.css'

const Layout = ({children}) => (
  <div className={'container'}>
    <Header className={'row'}/>
    <div className={style.container}>
      <main>{children}</main>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
