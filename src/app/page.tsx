import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Бібліотека, що працює на довірі</h1>
      <div>Тут книги можна взяти безкоштовно, а також поділитися своїми. Приєднуйтесь до спільноти книголюбів!</div>
    </div>
  );
}
