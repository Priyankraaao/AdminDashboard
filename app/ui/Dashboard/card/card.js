import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";




const Card = ({title="visit",count="7265",activity="12", style}) => {
  return (
    <div className={styles.container} style={...style}>
      {/* <MdSupervisedUserCircle size={24} /> */}
     
        <span className={styles.title}>{title}</span>

        <div className={styles.activityCount}>

        <div className={styles.count} data-number={count}>
        {count}
          </div>

        <span className={styles.activity}> 
          {activity}%
        </span>

        </div>
    </div>
  );
};

export default Card;
