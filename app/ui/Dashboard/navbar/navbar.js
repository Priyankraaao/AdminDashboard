"use client";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import {
  MdSearch,
} from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
        <Image
          className={styles.userImage}
          src={"/sidebar.svg"}
          alt=""
          width="24"
          height="24"
        />

        <Image
          className={styles.userImage}
          src={"/star.svg"}
          alt=""
          width="24"
          height="24"
        />

        <span className={styles.title}>{pathName.split("/").pop()}</span>
        <span className={styles.titleSlash}> /</span>
        <span> Default</span>
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input
            type="text"
            placeholder="Search...."
            className={styles.input}
          />
        </div>
        <div className={styles.icons}>
          <Image
            className={styles.userImage}
            src={"/sun.svg"}
            alt=""
            width="24"
            height="24"
          />

          <Image
            className={styles.userImage}
            src={"/ClockCounterClockwise.svg"}
            alt=""
            width="24"
            height="24"
          />
          
          <Image
            className={styles.userImage}
            src={"/Bell.svg"}
            alt=""
            width="24"
            height="24"
          />

          <Image
            className={styles.userImage}
            src={"/sidebar.svg"}
            alt=""
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
