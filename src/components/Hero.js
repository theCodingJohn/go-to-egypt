import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="row">
        <div className="col">
          <div className="text-wrapper">
            <span className="brown ancient-world sub-heading">
              the ancient world
            </span>
            <h1>
              Discover the awe<span className="dash"> &#8212; </span>inspiring{" "}
              <br className="line-break"></br>Pyramids of Giza and ancient
              Egpyt's
            </h1>
            <div className="scroll-down-wrapper">
              <div className="arrow-wrapper">
                <span className="arrow"></span>
                <span className="arrow"></span>
              </div>
              <span className="scroll-down">SCROLL DOWN</span>
            </div>
            <div className="social-links-wrapper absolute">
              <a
                target="_blank"
                href="https://www.facebook.com/"
                rel="noreferrer noopener"
              >
                Fb
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/"
                rel="noreferrer noopener"
              >
                In
              </a>
              <a
                target="_blank"
                href="https://twitter.com/"
                rel="noreferrer noopener"
              >
                Tw
              </a>
            </div>
            <a href="mailto:hi@gotoegypt.com" className="email absolute">
              hi@gotoegypt.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
