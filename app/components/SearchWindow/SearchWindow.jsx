import Input from "../Input/input";
import styles from "./searchWindow.module.css";

export default function SearchWindow() {
  return (
    <main className={styles.main}>
      <h1 className={styles.titleSearch}>Buscar Contato</h1>
      <div className={styles.containerSearch}>
        <Input />
        <button className={styles.buttonSearch} type="submit">
          PESQUISAR
        </button>
      </div>
    </main>
  );
}
