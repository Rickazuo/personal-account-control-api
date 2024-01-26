import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logoLar.png";
import logOut from "../../assets/logOut.png";

export default function Header() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image src={logo} alt="logo of Lar" width={40} height={40} />
        <a href="http://" className={styles.textHeader}>
          Home
        </a>
        <a href="http://" className={styles.textHeader}>
          Colaboradores
        </a>
        <a href="http://" className={styles.textHeader}>
          Telefones
        </a>
        <a href="http://" className={styles.textHeader}>
          Suporte
        </a>
        <button className={styles.logOutButton}>
          <Image src={logOut} alt="logo of Lar" width={32} height={32} />
        </button>
      </header>
    </main>
  );
}
