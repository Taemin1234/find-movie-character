import styles from './film-border.module.css';
import { ReactNode } from 'react';

export default function FilmBorder({ children }: { children: ReactNode }) {
    return <div className={styles.film_wrap}>
        <div className={styles.film}>
            {children}
        </div>
    </div>;
}