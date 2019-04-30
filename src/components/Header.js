import { Link } from "gatsby"
import React from "react"
import logo from '../resources/logo.svg'
import style from '../styles/header.module.css'
import PropTypes from 'prop-types';

const Header = ({selectedPage}) => {
  const selectedClass = (pageName) => selectedPage === pageName ? 'link-selected' : '';

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

Header.propTypes = {
  selectedPage: PropTypes.string
};

export default Header
