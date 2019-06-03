import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import style from "../styles/layout.module.css"
import '../styles/skeleton.css'
import '../styles/main.css'

const Layout = ({children, selectedPage}) => (
  <div className={'container'}>
    <div className={'row'}>
      <div className={'twelve columns'}>
        <Header selectedPage={selectedPage}/>
        <div className={style.container}>
          <main>{children}</main>
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  selectedPage: PropTypes.string
};

export default Layout
