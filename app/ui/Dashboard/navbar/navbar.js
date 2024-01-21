"use client";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
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
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
