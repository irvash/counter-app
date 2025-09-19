// import Image from "next/image";
import Counter from "./components/Counter/Counter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Counter App</h1>
        <Counter/>
      </main>
    </div>
  );
}
