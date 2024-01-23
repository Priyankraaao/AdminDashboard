import Image from "next/image";
import styles from "./styles.module.css";
import { signIn } from "next-auth/react";

const LoginWithGoogle = () => {
  return (
    <button
      className={styles.submitButton1}
      onClick={() => {
        signIn("google", {
          callbackUrl: `${window?.location.origin}/dashboard`,
        });
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Image
          src={"/Google.png"}
          alt=""
          width="20"
          height="20"
          className={styles.google}
        />{" "}
        Continue With Google
      </div>
    </button>
  );
};

export default LoginWithGoogle;
