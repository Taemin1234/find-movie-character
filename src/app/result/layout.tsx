import styles from './layout.module.css'

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.result_container}>
      <main className={styles.result_main}>
        <div className={styles.result_content}>
            {children}
        </div>
      </main>
    </div>
  );
}
