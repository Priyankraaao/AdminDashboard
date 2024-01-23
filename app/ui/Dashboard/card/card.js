import styles from "./styles.module.css";
import Image from "next/image";

const Card = ({ title = "visit", count = "7265", activity = "12", style }) => {
  return (
    <div className={styles.container} style={{ ...style }}>
      <span className={styles.title}>{title}</span>
      <div className={styles.activityCount}>
        <div className={styles.count} data-number={count}>
          {count}
        </div>
        <span className={styles.activity}>
          + {activity}%
          <Image
            className={styles.userImage}
            src={"/ArrowRise.svg"}
            alt=""
            width="20"
            height="20"
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
