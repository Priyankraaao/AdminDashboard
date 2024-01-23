"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.user}>
      <Image
        className={styles.userImage}
        src={"/noavatar.png"}
        alt=""
        width="24"
        height="24"
      />
      <div className={styles.userDetail}>
        <span className={styles.username}>{session?.user.name||"ByeWind"}</span>
      </div>
    </div>
  );
};

export default Profile;
