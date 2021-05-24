import styles from "./menu.module.scss";

const index = () => {
  return (
    <button className={styles.button}>
      <div
        className={`${styles.circle} ${styles.circle_left} ${styles.circle_top}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_left} ${styles.circle_center_hor}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_left} ${styles.circle_bottom}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_center_ver} ${styles.circle_center_top}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_center_ver} ${styles.circle_center_hor}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_center_ver} ${styles.circle_bottom}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_right} ${styles.circle_top}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_right} ${styles.circle_center_hor}`}
      ></div>
      <div
        className={`${styles.circle} ${styles.circle_right} ${styles.circle_bottom}`}
      ></div>
    </button>
  );
};

export default index;
