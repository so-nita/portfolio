import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo.svg';

const Header = () => {
  return (
    <header className="header w-100 d-flex">
      <>
        <div className='row w-100 align-items-center'>
          <div className='col-4 text-white text-start px-5 logo'>
            <img src={Logo} className="App-logo" alt="logo" />
          </div>
          <div className='col-8 d-flex justify-content-end d-none d-lg-block d-md-block align-items-center'>
            <ul className='d-flex justify-content-end '>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 1.<a href='#' > About </a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 2.<a href='#' > Experience</a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 3.<a href='#' > Work</a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 4.<a href='#' > Contact</a> </li>
            </ul>
          </div>
          <div className='col-4 d-lg-none d-md-none d-sm-block'> 
            <input type="checkbox" id="menyAvPaa" className="burger-checkbox" />
              <label id="burger" htmlFor="menyAvPaa" className="pointer">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </label>
              <nav id="meny" className="bg-white"></nav>
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
