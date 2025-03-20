import Image from 'next/image';
import { ResultProps } from '@/types'
import { getCharacterImg } from '@/util/get-character-img';
import styles from './main-character.module.css'

interface MainCharacterProps {
    result : ResultProps;
    width : number;
    height: number;
    showMainDes?:  boolean;
}

export default function MainCharacter({result, width, height, showMainDes}:MainCharacterProps) {
    return (
        <div className={styles.character_info_wrap}>
            <div className={styles.character_info_title}>
                <p className={styles.name}>{result.representative.name}</p>
                <p className={styles.movie}>{result.representative.movie}</p>
            </div>
            <Image 
                src={getCharacterImg(result.representative.name)} 
                alt={`${result.representative.name}`} 
                width={width} 
                height={height} 
            />   
                {showMainDes && <p className={styles.des}>{result.representative.mainDes}</p>}
        </div>
    )
}