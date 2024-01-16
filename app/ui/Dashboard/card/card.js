import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span>Total User</span>
 
        <span>10,234</span>

        <span> 
          <span> 12%</span> more than previous week{" "}
        </span>
      </div>
    </div>
  );
};

export default Card;
