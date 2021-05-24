import styles from "./logo.module.scss";

const index = () => {
  return (
    <h3 className={styles.logo}>
      <span className={styles.white}>GOTO</span>
      <span className={styles.brown}>EGYPT</span>
    </h3>
  );
};

export default index;
