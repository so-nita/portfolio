import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../logo.svg';

const Header = () => {
  return (
    <header className="header w-100 d-flex py-lg-2 py-1" style={{ zIndex:3 }}>
      <>
        <div className='row w-100 align-items-center'>
          <div className='col-4 text-white text-start px-2 px-lg-5 px-md-5 px-sm-2 logo'>
            <img src={Logo} className="App-logo py-lg-0 py-md-2 py-sm-1" alt="logo" />
          </div>
          <div className='col-8 d-flex justify-content-end d-none d-lg-block d-md-block align-items-center'>
            <ul className='d-flex justify-content-end '>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 1.<a href='/about'> About </a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 2.<a href='/about'> Experience</a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 3.<a href='/about'> Work</a> </li>
              <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon={faAngleRight} /> 4.<a href='/about'> Contact</a> </li>
            </ul>
          </div>
          <div className='col-4 d-lg-none d-md-none d-sm-block ' > 
            <input type="checkbox" id="menyAvPaa" className="burger-checkbox" />
              <label id="burger" htmlFor="menyAvPaa" className="pointer py-2 py-lg-0 py-md-0">
                <div className="bg-white"></div>
                <div className="bg-white"></div>
                <div className="bg-white"></div>
              </label>
              <nav id="meny" className="bg-white ">
                <ul className='d-flex text-black justify-content-center align-items-center'>
                  <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon= {faAngleRight} /> 1.<a href='/about' > About </a> </li>
                  <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon= {faAngleRight} /> 2.<a href='/about' > Experience</a> </li>
                  <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon= {faAngleRight} /> 3.<a href='/about' > Work</a> </li>
                  <li className='px-3 pt-3'> <FontAwesomeIcon size='13' icon= {faAngleRight} /> 4.<a href='/about' > Contact</a> </li>
                </ul>
              </nav>
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
