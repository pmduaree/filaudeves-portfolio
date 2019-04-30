import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import style from "../styles/layout.module.css"
import '../styles/skeleton.css'
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/main.css'

const Layout = (props) => (
  <div className={'container'}>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"/>
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
