import { Link } from "gatsby"
import React from "react"
import logo from '../resources/logo.svg'
import style from '../styles/header.module.css'

const Header = () => (
  <header>
    <div className={style.header}>
      <Link to="/">
        <img src={logo}/>
      </Link>
      <div className={style.buttons}>
        <Link className={style.button} to="work">
          Work
        </Link>
        <Link className={style.button} to="about-me">
          About Me
        </Link>
        <Link className={style.button} to="contact">
          Contact
        </Link>
      </div>
    </div>
  </header>
);

export default Header
