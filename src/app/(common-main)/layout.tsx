import styles from './layout.module.css'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>🎞️나와 맞는 영화 캐릭터</p>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
