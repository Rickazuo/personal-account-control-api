import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import logo from "../../assets/logoLar.png";
import logOut from "../../assets/logOut.png";

export default function Header() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image
          className={styles.imageHeaderLogo}
          src={logo}
          alt="logo of Lar"
          width={40}
          height={40}
        />
        <Link className={styles.textHeader} href="/workers">
          {"Colaboradores "}
        </Link>
        <Link className={styles.textHeader} href="/searchWorker">
          {" Buscar"}
        </Link>
        <Link className={styles.textHeader} href="/support">
          {"Suporte "}
        </Link>
        <button className={styles.logOutButton}>
          <Image src={logOut} alt="log out" width={32} height={32} />
        </button>
      </header>
    </main>
  );
}
