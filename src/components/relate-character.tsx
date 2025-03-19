import {  DataProps } from '@/types'
import { useFetchResult } from "@/hooks/useFetchResult"
import MainCharacter from './main-character';

export default function ResultCharacter({ result }: DataProps) {
    const resultArr = useFetchResult();
    
    //resultArr : 모든 데이터
    // result : 선택한 데이터 value값

    const incompatible = resultArr[result.incompatible]
    const compatible = resultArr[result.compatible]


    // console.log(resultArr)
    console.log(incompatible)

    //MainCharacter에 전달하는데이터가 타입이 맞는지 옳은지 확인

    return (
        <div>
            <div>
                <p>잘 맞는 캐릭터</p>
                {/* <MainCharacter result={compatible} width={150} height={150} showMainDes={false}/> */}
            </div>
            <div>
                <p>상극인 캐릭터</p>
                {/* <MainCharacter result={incompatible} width={150} height={150} showMainDes={false}/> */}
            </div>
        </div>
    )
}