import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to FEJA-Shop!</h1>
      <p>A web-shop built with Next.js.</p>
    </div>
  );
}
