import { Link } from "gatsby"
import React from "react"
import logo from '../resources/logo.svg'
import style from '../styles/header.module.css'

const Header = (props) => {
  const pathName = props.pathName ? props.pathName.slice(1) : '';

  const selectedClass = (pageName) => pathName === pageName ? 'selected' : '';

  return (<header>
    <div className={style.header}>
      <Link to="/">
        <img src={logo}/>
      </Link>
      <div className={style.anchors}>
        <Link className={[style.anchor, selectedClass('work')].join(' ')} to="work">
          Work
        </Link>
        <Link className={[style.anchor, selectedClass('about-me')].join(' ')} to="about-me">
          About Me
        </Link>
        <Link className={[style.anchor, selectedClass('contact')].join(' ')} to="contact">
          Contact
        </Link>
      </div>
    </div>
  </header>)
};

export default Header
