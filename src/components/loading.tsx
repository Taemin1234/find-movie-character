import styles from './loading.module.css'

export default function Loading () {
    return (
        <div className={styles.loading_data}>
          <div className={styles.loading_bar}></div>
          <div className={styles.loading_bar}></div>
          <div className={styles.loading_bar}></div>
          <div className={styles.loading_bar}></div>
        </div>
    )
}