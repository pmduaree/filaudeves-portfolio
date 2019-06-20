import React from "react"

import Layout from "../components/Layout"
import homeBackground from "../resources/homeBackground.svg";
import homeDevices from "../resources/homeDevices.svg";
import homeMe from "../resources/homeMe.svg";
import homeDesktop from "../resources/homeDesktop.svg";
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
          <div className={style.desktopBase}>
            <object className={style.desktopBackground} data={homeBackground} type="image/svg+xml"/>
            <div className={style.desktopDevices}>
              <Link className={style.desktopAnchor} to={"work"} state={{selectedProjectType: 'DEVICES'}}><span className={'sr-read'}>Devices</span></Link>
              <object data={homeDevices} type="image/svg+xml"/>
            </div>
            <div className={style.desktopDesktop}>
              <Link className={style.desktopAnchor} to={"work"} state={{selectedProjectType: 'DESKTOP'}}><span className={'sr-read'}>Desktop</span></Link>
              <object data={homeDesktop} type="image/svg+xml"/>
            </div>
            <div className={style.desktopMe}>
              <Link className={style.desktopAnchor} to={"about-me"}><span className={'sr-read'}>About Me</span></Link>
              <object data={homeMe} type="image/svg+xml"/>
            </div>
          </div>
        </div>
        <div className={style.imageMobile}>
          <Link to={"work"} state={{selectedProjectType: 'DESKTOP'}}>
            <img src={homeDesktopMobile}/>
            <div className={style.textMobile}>Desktop</div>
          </Link>
          <Link to={"work"} state={{selectedProjectType: 'DEVICES'}}>
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
