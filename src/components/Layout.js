import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import style from "../styles/layout.module.css"
import '../styles/main.css'

const Layout = ({children}) => (
  <div className={style.bodyMain}>
    <Header/>
    <div className={style.container}>
      <main>{children}</main>
    </div>
    {/*<Footer/>*/}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
