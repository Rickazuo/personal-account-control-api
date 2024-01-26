import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchContact from "./components/SearchContact/SearchContact";
import ShowContacts from "./components/ShowContacts/ShowContacts";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ShowContacts />
      <Footer />
    </main>
  );
}
