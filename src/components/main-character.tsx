import Image from 'next/image';
import { ResultProps } from '@/types'
import { getCharacterImg } from '@/util/get-character-img';

interface MainCharacterProps {
    result : ResultProps;
    width : number;
    height: number;
    showMainDes?:  boolean;
}

export default function MainCharacter({result, width, height, showMainDes}:MainCharacterProps) {
    return (
        <div>
            <Image 
                src={getCharacterImg(result.representative.name)} 
                alt={`${result.representative.name}`} 
                width={width} 
                height={height} 
            />   
                <p>{result.representative.name}</p>
                <p>{result.representative.movie}</p>
                {showMainDes && <p>{result.representative.mainDes}</p>}
        </div>
    )
}