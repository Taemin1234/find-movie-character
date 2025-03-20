import {  DataProps } from '@/types'
import { useFetchResult } from "@/hooks/useFetchResult"
import MainCharacter from './main-character';

export default function ResultCharacter({ result }: DataProps) {
    const resultArr = useFetchResult();
    
    //resultArr : 모든 데이터
    // result : 선택한 데이터 value값

    const incompatible = resultArr[result.incompatible]
    const compatible = resultArr[result.compatible]

    if (!incompatible || !compatible) {
        return <p>로딩중 입니다</p>;
    }

    return (
        <div>
            <div>
                <p>잘 맞는 캐릭터</p>
                <MainCharacter result={compatible} width={69} height={100} showMainDes={false}/>
            </div>
            <div>
                <p>상극인 캐릭터</p>
                <MainCharacter result={incompatible} width={69} height={100} showMainDes={false}/>
            </div>
        </div>
    )
}