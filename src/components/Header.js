import {Link} from "gatsby"
import React from "react"
import logo from '../resources/logo.svg'
import style from '../styles/header.module.css'
import PropTypes from 'prop-types';

const Header = ({selectedPage}) => {
  const selectedClass = (pageName) => selectedPage === pageName ? 'link-selected' : '';

  return (
    <header>
      <div className={[style.header, 'row'].join(' ')}>
        <Link to="/" className={'four columns'}>
          <img src={logo}/>
        </Link>
        <div className={'two columns'}>&nbsp;</div>
        <div className={'two columns'}>
          <Link className={style.anchor} to="work">
            <span className={[style.text, selectedClass('work')].join(' ')}>
              Work
            </span>
          </Link>
        </div>
        <div className={'two columns'}>
          <Link className={style.anchor} to="about-me">
            <span className={[style.text, selectedClass('about-me')].join(' ')}>
              About Me
            </span>
          </Link>
        </div>
        <div className={'two columns'}>
          <Link className={style.anchor} to="contact">
            <span className={[style.text, selectedClass('contact')].join(' ')}>
              Contact
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
};

Header.propTypes = {
  selectedPage: PropTypes.string
};

export default Header
