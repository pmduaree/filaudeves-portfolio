import React from "react"
import portfolioPhoto from "../resources/avatar.png"
import style from '../styles/AboutMeSidebar.module.css'
import Bar from "./Bar";

const AboutMeSidebar = () => {
  return (
    <div className={['row', style.sidebar].join(' ')}>
      <div className={'one column'}>&nbsp;</div>
      <div className={'ten columns'}>
        <div className={style.container}>
          <div className={style.name}>Ivonne Audeves</div>
          <img className={style.profilePicture} src={portfolioPhoto}/>
          <div className={style.skillsContainer}>
            <h5>Language</h5>
            <Bar value={100} label={'English (Profesional)'}/>
            <Bar value={100} label={'Spanish (Native)'}/>
            <h5>Location</h5>
            <div>Sonora, M&eacute;xico.</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutMeSidebar;
