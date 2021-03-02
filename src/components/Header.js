import {Link} from "gatsby"
import React, {useState} from "react"
import logo from '../resources/logo.svg'
import style from '../styles/header.module.css'
import PropTypes from 'prop-types';

const Header = ({selectedPage}) => {
  const selectedClass = (pageName) => selectedPage === pageName ? 'link-selected' : '';
  const [displayMenuModal, setDisplayMenuModal] = useState(false);

  const toggleDisplayMenu = () => {
    setDisplayMenuModal(!displayMenuModal);
    document.documentElement.style.overflowY = displayMenuModal ? 'scroll' : 'hidden';

    return () => {
      document.documentElement.style.overflowY = 'scroll';
    }
  };

  return (
    <header>
      <div className={[style.header, 'row'].join(' ')}>
        <div className={[style.headerMobile, 'six columns'].join(' ')}>
          <Link to="/">
            <img src={logo}/>
          </Link>
          <div className={style.headerMenuMobile} onClick={toggleDisplayMenu}>
            {displayMenuModal ? 'Close' : 'Menu'}
          </div>
        </div>
        <div className={'six columns'}>
          <div className={style.headerMenuDesktop}>
            <Link className={style.anchor} to="/work">
              <span className={[style.text, selectedClass('work')].join(' ')}>
                Work
              </span>
            </Link>
            <Link className={style.anchor} to="/about-me">
              <span className={[style.text, selectedClass('about-me')].join(' ')}>
                About Me
              </span>
            </Link>
            <Link className={style.anchor} to="/contact">
              <span className={[style.text, selectedClass('contact')].join(' ')}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={[style.menuMobile, displayMenuModal ? style.show : style.hide].join(' ')}>
        <div className={"row"}>
          <div className={"twelve columns"}>
            <Link className={style.anchor} to="/work">
              <span className={[style.text, selectedClass('work')].join(' ')}>
                Work
              </span>
            </Link>
            <Link className={style.anchor} to="/about-me">
              <span className={[style.text, selectedClass('about-me')].join(' ')}>
                About Me
              </span>
            </Link>
            <Link className={style.anchor} to="/contact">
              <span className={[style.text, selectedClass('contact')].join(' ')}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
};

Header.propTypes = {
  selectedPage: PropTypes.string
};

export default Header
