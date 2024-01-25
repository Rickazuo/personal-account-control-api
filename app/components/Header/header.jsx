import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../assets/logoLar.png";
import logOut from "../../assets/logOut.png";

export default function Header() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Image src={logo} alt="logo of Lar" width={40} height={40} />
        <a href="http://">Home</a>
        <a href="http://">Colaboradores</a>
        <a href="http://">Registros</a>
        <button className={styles.logOutButton}>
          <Image src={logOut} alt="logo of Lar" width={32} height={32} />
        </button>
      </header>
    </main>
  );
}
