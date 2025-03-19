'use client'

import { useSearchParams } from "next/navigation"
import { useFetchResult } from "@/hooks/useFetchResult"
import ResultCharacter from '@/components/result-character'
import RelateCharacter from '@/components/relate-character'

export default function Result() {
    const searchParams = useSearchParams();
    const res = searchParams.get('res')
    const resultArr = useFetchResult();

    if (!resultArr || !res || !(res in resultArr)) {
        return <div>잘못된 요청입니다.</div>;
    }

    const result = resultArr[res]

    return (
        <div>
            <ResultCharacter result = {result} />
            <RelateCharacter result = {result} />
        </div>
    )
} 