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
            <Link className={style.desktopArrow} to={"work"} state={{selectedProjectType: 'DESKTOP'}}>
              <svg width="149" height="65" viewBox="0 0 149 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="1.5" className={style.arrow} d="M0.5 64C0.499997 46 26 1 76.5 1C123 1 143 24.3333 148.5 33.5" stroke="#5368E0" />
              </svg>
              <span className={style.desktopText}>Desktop</span>
            </Link>
            <Link className={style.aboutMeArrow} to={"about-me"}>
              <svg width="115" height="65" viewBox="0 0 115 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="1.5" className={style.arrow} d="M114.5 64C114.5 46.5 106.1 11 70.5 3C34.9 -5 10.6667 11.8333 0.5 23" stroke="#5368E0"/>
              </svg>
              <span className={style.aboutMeText}>About Me</span>
            </Link>
            <Link className={style.devicesArrow} to={"work"} state={{selectedProjectType: 'DEVICES'}}>
              <svg width="85" height="39" viewBox="0 0 85 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path strokeWidth="1.5" className={style.arrow}  d="M84.2336 0.500152C79 0.499943 44.5 0.500202 33.5 0.500157C1.23364 0.500024 1.2337 27.5001 1.23364 37.5247" stroke="#5368E0"/>
              </svg>
              <span className={style.devicesText}>Devices</span>
            </Link>
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

export default IndexPage;
