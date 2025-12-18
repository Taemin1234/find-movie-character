"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useData } from '@/context/URLContext'
import Image from 'next/image';
// import shilhouette from '/public/images/silhouette.webp'
import Button from '@/components/button'

export default function Home() {
  const { setData } = useData()
  const router = useRouter();

  const enterQuestion = () => {
    router.push('/question')
  }

  useEffect(() => {
    setData(window.location.href);
  }, [])

  return (
    <>
      <div className={styles.main_wrap}>
        <p className={styles.sub_title}>나와 어울리는 영화 캐릭터는 누구일까??</p>
        <Image className={styles.main_img} width={300} height={300} src="/images/silhouette.webp" alt="메인 실루엣 이미지" />
      </div>
      <Button content={'시작하기'} onClick={enterQuestion} />
    </>
  );
}
