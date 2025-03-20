import { DataProps } from '@/types'
import MainCharacter from './main-character';
import styles from './result-character.module.css'

export default function ResultCharacter({ result }: DataProps) {
    return (
        <div className={styles.result_character_wrap}>
            <MainCharacter result={result} width={200} height={300} showMainDes={true} />
            <div className={styles.des_character}>
                <ul className={styles.des_list}>
                    {result.representative.detailedDescription.map((el, i) => {
                        return (
                            <li key={i}>
                                <p className={styles.bul_title} dangerouslySetInnerHTML={{ __html: el.title }}></p>
                                <ul className={styles.txt_bul1}>
                                    <li>
                                        <p>{el.des1}</p>
                                    </li>
                                    <li>
                                        <p>{el.des2}</p>
                                    </li>
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p>키워드</p>
                {result.representative.keywords.map((el, i) => {
                    return (
                        <span key={i}>{el}</span>
                    )
                })}
            </div>
            <div className={styles.other_character}>
                <p className={styles.title}>다른 캐릭터는?</p>
                <ul>
                    {result.characters.map((el, i) => {
                        return (
                            <li key={i}>
                                <p><span>{el.name}</span> - ({el.movie})</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}