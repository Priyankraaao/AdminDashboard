import styles from "./styles.module.css";

const DivStyle = () => {
  return (
    <div className={styles.divStyles}>
      <div className={styles.divStyle1}></div>
      <div className={styles.divStyle2}></div>
      <div className={styles.divStyle3}></div>
    </div>
  );
};

const TraficByWebsite = () => {
  return (
    <div className={styles.container1}>
      <span style={{ fontWeight: 600 }}>Trafic by website</span>
      <div className={styles.traficContainer}>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Google </span> <DivStyle/>
        </div>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Youtub </span> <DivStyle/>
        </div>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Instrgm </span> <DivStyle/>
        </div>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Pintrest </span> <DivStyle/>
        </div>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Facebook </span> <DivStyle/>
        </div>
        <div className={styles.divStylesParent}>
        <span className={styles.text2}>Twitter </span> <DivStyle/>
        </div>
      </div>
    </div>
  );
};

export default TraficByWebsite;
