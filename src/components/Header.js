import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <>
        <input type="checkbox" id="menyAvPaa" className="burger-checkbox" />
        <label id="burger" htmlFor="menyAvPaa" className="pointer">
          <div className="bg-black"></div>
          <div className="bg-black"></div>
          <div className="bg-black"></div>
        </label>
        <nav id="meny" className="bg-white">
        </nav>
      </>
    </header>
  );
};

export default Header;
