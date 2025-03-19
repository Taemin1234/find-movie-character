import { DataProps } from '@/types'
import MainCharacter from './main-character';

export default function ResultCharacter({result}:DataProps) {
    return (
        <div>
            <MainCharacter result={result} width={150} height={150} showMainDes={true}/>
            <div>
                <ul>
                    {result.characters.map((el,i) => {
                        return (
                            <li key={i}>
                                <p>{el.name}</p>
                                <p>{el.movie}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {result.representative.detailedDescription.map((el, i) => {
                        return (
                            <li key={i}>
                                <p dangerouslySetInnerHTML={{ __html: el.title }}></p>
                                <p>{el.des1}</p>
                                <p>{el.des2}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <p>키워드</p>
                {result.representative.keywords.map((el,i) => {
                    return (
                        <span key={i}>{el}</span>
                    )
                })}
            </div>
        </div>
    );
}