import styles from "./hero.module.scss";

const index = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.row}>
        <div className="col">
          <div className={styles.text_wrapper}>
            <span
              className={`${styles.ancient_world} ${styles.brown} ${styles.sub_heading}`}
            >
              the ancient world
            </span>
            <h1>
              Discover the awe<span className="dash"> &#8212; </span>inspiring{" "}
              <br className={styles.line_break}></br>Pyramids of Giza and
              ancient Egpyt's
            </h1>
            <div className={styles.scroll_down_wrapper}>
              <div className={styles.arrow_wrapper}>
                <span className={styles.arrow}></span>
                <span className={styles.arrow}></span>
              </div>
              <span className={styles.scroll_down}>SCROLL DOWN</span>
            </div>
            <div
              className={`${styles.absolute} ${styles.social_links_wrapper}`}
            >
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
            <a
              href="mailto:hi@gotoegypt.com"
              className={`${styles.absolute} ${styles.email}`}
            >
              hi@gotoegypt.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
