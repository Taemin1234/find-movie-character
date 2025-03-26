import Image from 'next/image';
import { ResultProps } from '@/types'
import { getCharacterImg } from '@/util/get-character-img';
import styles from './main-character.module.css'

interface MainCharacterProps {
    result: ResultProps;
    width: number;
    height: number;
    showMainDes?: boolean;
    isInsideRC?: string;
}

export default function MainCharacter({ result, width, height, showMainDes, isInsideRC }: MainCharacterProps) {
    return (
        <div className={`${styles.character_info_wrap} ${isInsideRC ? styles[isInsideRC] : ""}`}>
            <div className='film_bottom'>
                <div className={styles.character_info_title}>
                    <p className={styles.name}>{result.representative.name}</p>
                    <p className={styles.movie}>{result.representative.movie}</p>
                </div>
                <Image
                    src={getCharacterImg(result.representative.name)}
                    alt={`${result.representative.name}`}
                    width={width}
                    height={height}
                    className={styles.char_img}
                />
                {showMainDes && <p className={styles.des}>{result.representative.mainDes}</p>}
            </div>
        </div>
    )
}