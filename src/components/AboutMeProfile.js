import React from "react"
import style from '../styles/aboutMeProfile.module.css'
import AboutMeSidebar from "./AboutMeSidebar";

const AboutMeProfile = () => {
  return (
    <>
      <div className={style.profileContainer}>
        <AboutMeSidebar/>
      </div>
      <div className={'row'}>
        Ivonne is a UX/UI designer from M&eacute;xico. Experienced in Product Innovation for software industry and strategic
        improvement.
        <br/>
        <br/>
        She build products with Strategic Design by analysing the user and connecting the findings with the business
        strategy to deliver a viable product
        <br/>
        <br/>
        For her, understanding the user behaviors and pain points, is the key to gather actionable insight that would
        enhance the product usage experience.
        <br/>
        <br/>
        She became passionate about UX by playing video games. She was amazed how on SNES games you didn’t have a
        tutorial and could learn patterns by the way you interact with the elements on the screen, and her goal is to
        achieve the same philosophy on products.
        <br/>
        <br/>
        <br/>
        <h2>Education</h2>
        Bachelor of Industrial Design from Instituto Tecnol&oacute;gico de Estudios Superiores de Monterrey
      </div>
    </>
  )
};

export default AboutMeProfile;
