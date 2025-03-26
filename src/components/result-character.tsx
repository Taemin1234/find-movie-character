import { DataProps } from '@/types'
import MainCharacter from './main-character';
import FilmBorder from './film-border';
import styles from './result-character.module.css'

export default function ResultCharacter({ result }: DataProps) {
    return (
        <>
            <FilmBorder>
                <MainCharacter result={result} width={200} height={300} showMainDes={true} />
            </FilmBorder>
            <FilmBorder>
                <div className={styles.des_character}>
                    <ul className={styles.des_list}>
                        {result.representative.detailedDescription.map((el, i) => {
                            return (
                                <li key={i} className={styles.list_first}>
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
            </FilmBorder>
            <FilmBorder>
                <div className={styles.keyword}>
                    <div className='film_bottom'>
                        <p className={styles.keyword_title}>키워드</p>
                        <div className={styles.keyword_wrap}>
                            {result.representative.keywords.map((el, i) => {
                                return (
                                    <span key={i} className={styles.keyword_el}>{el}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </FilmBorder>

            <FilmBorder>
                <div className={styles.other_character}>
                    <div className='film_bottom'>
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
            </FilmBorder>

        </>
    );
}