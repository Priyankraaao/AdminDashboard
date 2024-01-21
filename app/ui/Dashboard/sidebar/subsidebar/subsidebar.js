"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

const SubSideBar = ({ item = {} }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.icon}
      <div  className={`${styles.title} ${
        pathName === item.path && styles.active
      }`}>
      {item.title}
      </div>
    </Link>
  );
};

export default SubSideBar;
