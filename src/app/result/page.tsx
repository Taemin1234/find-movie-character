'use client'

import { useSearchParams, useRouter } from "next/navigation"

import { useFetchResult } from "@/hooks/useFetchResult"
import ResultCharacter from '@/components/result-character'
import RelateCharacter from '@/components/relate-character'
import Button from '@/components/button'

export default function Result() {
    const searchParams = useSearchParams();
    const res = searchParams.get('res')
    const resultArr = useFetchResult();
    const router = useRouter();

    if (!resultArr || !res || !(res in resultArr)) {
        return <div>잘못된 요청입니다.</div>;
    }

    const result = resultArr[res]

    const backMain = () => {
        router.push('/');
    }

    return (
        <div>
            <ResultCharacter result = {result} />
            <RelateCharacter result = {result} />
            <Button content={'다시 하기'} onClick={backMain}/>
        </div>
    )
} 