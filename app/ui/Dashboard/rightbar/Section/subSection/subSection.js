import Image from "next/image";
import styles from "./styles.module.css";

const SubSection = ({ items }) => {
  console.log("items", items);

  return (
    <div className={styles.container}>
      <Image
        className={styles.userImage}
        src={"/noavatar.png"}
        alt=""
        width="24"
        height="24"
      />
      <div className={styles.texts}>
        <div className={styles.title}>{items.title}</div>
        <div className={styles.description}>{items.description}</div>
      </div>
    </div>
  );
};

export default SubSection;
