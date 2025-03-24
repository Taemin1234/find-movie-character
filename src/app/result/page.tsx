'use client'

import { useSearchParams, useRouter } from "next/navigation"
import styles from './page.module.css'
import { useFetchResult } from "@/hooks/useFetchResult"
import { useData } from '../../context/URLContext'
import ResultCharacter from '@/components/result-character'
import RelateCharacter from '@/components/relate-character'
import Button from '@/components/button'

export default function Result() {
    const searchParams = useSearchParams();
    const res = searchParams.get('res')
    const resultArr = useFetchResult();
    const router = useRouter();
    const { data } = useData();

    if (!resultArr || !res || !(res in resultArr)) {
        return <div>잘못된 요청입니다.</div>;
    }

    const result = resultArr[res]

    const backMain = () => {
        router.push('/');
    }

    const copyURL = ():void => {
        const projectUrl: string = data;
        const t:HTMLTextAreaElement = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = projectUrl;
        t.select();
        document.execCommand("copy");
        document.body.removeChild(t);
        
        alert("클립보드에 복사되었습니다");
    };

    return (
        <div className={styles.result}>
            <ResultCharacter result={result} />
            <RelateCharacter result={result} />
            <Button content={'다시 하기'} onClick={backMain} />
            <Button content={'공유 하기'} onClick={copyURL} />
        </div>
    )
} 