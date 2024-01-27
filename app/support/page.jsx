import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Support Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div className={styles.supportSection}>
        <div className={styles.supportItem}>
          <h2>Frequently Asked Questions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.
          </p>
        </div>
        <div className={styles.supportItem}>
          <h2>Contact Us</h2>
          <p>
            For more support, email us at{" "}
            <a href="mailto:support@example.com">support@example.com</a> or call
            us at 123-456-7890.
          </p>
        </div>
        <div className={styles.supportItem}>
          <h2>Additional Resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mauris dolor, gravida a varius blandit.
          </p>
        </div>
      </div>
    </div>
  );
}
