import React from "react";

import Hero from "./Hero";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="row">
          <div className="col col1">
            <h3 className="logo">
              <span className="white">GOTO</span>
              <span className="brown">EGYPT</span>
            </h3>
          </div>
          <div className="col col2">
            <ul className="link-wrapper">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Explore</a>
              </li>
              <li>
                <a href="/">Articles</a>
              </li>
              <li>
                <a href="/">Galleries</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col col3">
            <button className="button">
              <div className="circle circle-left circle-top"></div>
              <div className="circle circle-left circle-center-hor"></div>
              <div className="circle circle-left circle-bottom"></div>
              <div className="circle circle-center-ver circle-top"></div>
              <div className="circle circle-center-ver circle-center-hor"></div>
              <div className="circle circle-center-ver circle-bottom"></div>
              <div className="circle circle-right circle-top"></div>
              <div className="circle circle-right circle-center-hor"></div>
              <div className="circle circle-right circle-bottom"></div>
            </button>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
