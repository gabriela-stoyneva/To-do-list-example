import styles from './Header.module.css'

export default function Header() {
  return (
    <div>
      <header className={styles["navigation-header"]}>
        <span className={styles["navigation-logo"]}>
          <img src="/images/todo-icon.png" alt="todo-logo" />
        </span>
        <span className={styles["spacer"]}></span>
        <span className={styles["navigation-description"]}>Todo List</span>
      </header>
    </div>
  );
}
