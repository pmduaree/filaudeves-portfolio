import React from "react"

import Layout from "../components/Layout"
import homeImg from "../resources/home.svg";
import style from "../styles/index.module.css";
import homeDesktopMobile from "../resources/homeDesktopMobile.svg";
import homeDevicesMobile from "../resources/homeDevicesMobile.svg";
import homeAboutMeMobile from "../resources/homeAboutMeMobile.svg";
import {Link} from "gatsby"

const IndexPage = () => (
  <Layout>
    <div className={'row'}>
      <div className={'one column'}>&nbsp;</div>
      <div className={'ten columns'}>
        <div className={style.imageDesktop}>
          <div className={style.greetingText}>
            <div className={style.nameText}>I'm Ivonne.</div>
            <div>UX/UI Designer</div>
          </div>
          <img className={style.imageContainer} src={homeImg}/>
        </div>
        <div className={style.imageMobile}>
          <Link to={"work"}>
            <img src={homeDesktopMobile}/>
            <div className={style.textMobile}>Desktop</div>
          </Link>
          <Link to={"work"}>
            <img src={homeDevicesMobile}/>
            <div className={style.textMobile}>Devices</div>
          </Link>
          <Link to={"about-me"}>
            <img src={homeAboutMeMobile}/>
            <div className={style.textMobile}>About Me</div>
          </Link>
        </div>
      </div>

    </div>
  </Layout>
);

export default IndexPage
