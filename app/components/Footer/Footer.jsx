import styles from "./footer.module.css";

export default function Footer() {
  return (
    <main className={styles.main}>
      <div>
        <p className={styles.copyright}>
          Copyright &copy; 2024, All Right Reserved{" "}
          <a
            className={styles.linkCopyright}
            href="https://www.lar.ind.br/en/home-en/"
            target="_blank"
          >
            Lar
          </a>
        </p>
      </div>
      <div>
        <ul className={styles.footerNavigation}>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Policy</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
