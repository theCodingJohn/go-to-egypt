import styles from "./facts.module.scss";

const index = () => {
  return (
    <section className={styles.container}>
      <div className={styles.row1}>
        <div>
          <span className={styles.sub_heading}>10 things</span>
          <h2>
            <span className={styles.white}>You probably didn’t know about</span>{" "}
            <span className={styles.black}>ancient Egypt</span>
          </h2>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default index;
