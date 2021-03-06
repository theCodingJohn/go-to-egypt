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
        </div>
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
