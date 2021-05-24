import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import styles from "./civilization.module.scss";

import video from "../../public/video/egypt.mp4";
import poster from "../../public/img/videoImage.jpg";

const index = () => {
  const [isPause, setIsPause] = useState(true);
  const videoRef = useRef();
  const videoBarRef = useRef();
  const playButtonRef = useRef();
  let player;
  let hideControls = null;

  const openFullScreen = () => {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  const playPause = () => {
    clearTimeout(hideControls);
    gsap.to(videoBarRef.current, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(playButtonRef.current, {
      duration: 0.3,
      opacity: 1,
    });
    if (isPause) {
      player.play();
      hideControls = setTimeout(() => {
        gsap.to(videoBarRef.current, {
          duration: 0.3,
          opacity: 0,
        });
        gsap.to(playButtonRef.current, {
          duration: 0.3,
          opacity: 0,
        });
      }, 5000);
    } else if (!isPause) {
      player.pause();
      hideControls = null;
    }
    setIsPause(!isPause);
  };

  const hoverEffect = () => {
    clearTimeout(hideControls);
    gsap.to(videoBarRef.current, {
      duration: 0.3,
      opacity: 1,
    });
    gsap.to(playButtonRef.current, {
      duration: 0.3,
      opacity: 1,
    });
  };

  const removeHoverEffect = () => {
    clearTimeout(hideControls);
    hideControls = setTimeout(() => {
      gsap.to(videoBarRef.current, {
        duration: 0.3,
        opacity: 0,
      });
      gsap.to(playButtonRef.current, {
        duration: 0.3,
        opacity: 0,
      });
    }, 5000);
  };

  useEffect(() => {
    player = videoRef.current;
  }, [isPause]);

  return (
    <section className={styles.civilization}>
      <div>
        <div className={styles.heading_wrapper}>
          <span className={`${styles.black} ${styles.sub_heading}`}>
            The Ancient
          </span>
          <h2>
            <span className={styles.white}>Egyptian</span>
            <span className={styles.black}>civilization</span>
          </h2>
        </div>
      </div>
      <div>
        <div className={styles.description_wrapper}>
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
      <div>
        <div
          className={styles.video_wrapper}
          onClick={playPause}
          onMouseOver={hoverEffect}
          onMouseOut={removeHoverEffect}
        >
          <video ref={videoRef} className={styles.video} poster={poster}>
            <source src={video}></source>
          </video>
          <div className={styles.controls}>
            <div ref={videoBarRef} className={styles.video_bar}>
              <div className={styles.white_length}></div>
              <button
                onClick={openFullScreen}
                className={styles.fullscreen}
              ></button>
            </div>
            <div ref={playButtonRef} className={styles.buttons}>
              <button
                className={`${styles.play_pause} ${
                  isPause ? "" : styles.pause
                }`}
              >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.large_text_wrapper}>
          <h4>CIVILIZATION</h4>
        </div>
      </div>
    </section>
  );
};

export default index;
