import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import SearchWindow from "./components/SearchWindow/SearchWindow";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <SearchWindow />
      <Footer />
    </main>
  );
}
