import React from "react";

// video
import video from "../assets/video/egypt.mp4";
// import videoImage from "../assets/img/videoImage.jpg";

const EgyptianCivilization = () => {
  return (
    <section className="egyptian-civilization">
      <div className="row row1">
        <div className="col">
          <span className="sub-heading black">The Ancient</span>
          <h2>
            <span className="white">Egyptian</span>
            <span className="black">civilization</span>
          </h2>
        </div>
      </div>
      <div className="row row2">
        <div className="col">
          <p>
            The ancient Egyptian civilization, famous for its pyramids,
            pharaohs, mummies, and tombs, flourished for thousands of years. But
            what was its lasting impack?
          </p>
          <p>
            Watch the video below to learn how ancient Egypt contributet to
            modern day society with its many cultural developments, particularly
            in language & mathematics.
          </p>
        </div>
      </div>
      <div className="row row3">
        <div className="col">
          <video className="video" controls autoPlay>
            <source src={video} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="row row4">
        <div className="col">
          <h4>CIVILIZATION</h4>
        </div>
      </div>
    </section>
  );
};

export default EgyptianCivilization;
