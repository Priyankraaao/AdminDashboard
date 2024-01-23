"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import styles from "./styles.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const Logout = () => {
  const { data: Session } = useSession();

  const router = useRouter();

  const logout = async () => {
    if (Session?.user.name) {
      signOut();
      return;
    }

    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button onClick={() => logout()} className={styles.logout}>
      <MdLogout />
      Logout
    </button>
  );
};
export default Logout;
