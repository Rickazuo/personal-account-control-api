import Image from "next/image";
import styles from "./page.module.css";
import ShowContacts from "./components/ShowContacts/ShowContacts";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowContacts/>
    </main>
  );
}
