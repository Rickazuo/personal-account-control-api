import styles from "./footer.module.css";

export default function Footer() {
  return (
    <main className={styles.main}>
      <div>
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
        <button className={styles.logOutButton}></button>
      </div>
    </main>
  );
}
