import styles from "./header.module.scss";

import MenuButton from "../menu";
import Logo from "../logo";

const index = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.row}>
          <div>
            <Logo />
          </div>
          <div className={styles.links_container}>
            <ul className={styles.links_wrapper}>
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
            <MenuButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default index;
