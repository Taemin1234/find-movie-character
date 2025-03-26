"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
import { useFetchQuestion } from "@/hooks/useFetchQuestion"
import QuestionBox from "@/components/question-box";
import Loading from "@/components/loading"

export default function QuestionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();
  const questions = useFetchQuestion()


  const handleAnswer = (answer: string) => {
    setAnswers((prev) => [...prev, answer]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const resMbti = generateType(answers)
      router.push(`/result?res=${encodeURIComponent(resMbti)}`);
    }
  };

  const generateType = (answers: string[]) => {
    // 주어진 차원(예: ['E','I'])에 해당하는 답변들의 개수를 계산하고, 다수결로 최종 결과를 도출하는 함수
    const getDimensionResult = (dimensionLetters: string[]) => {
      // dimensionLetters: 예를 들어 ['E', 'I']
      const counts = { [dimensionLetters[0]]: 0, [dimensionLetters[1]]: 0 };

      // 배열 전체에서 해당 차원에 속하는 글자만 카운트
      answers.forEach(letter => {
        if (counts.hasOwnProperty(letter)) {
          counts[letter]++;
        }
      });

      // 만약 동점일 경우 기본값으로 첫 번째 글자를 선택하도록 함
      return counts[dimensionLetters[0]] >= counts[dimensionLetters[1]] ? dimensionLetters[0] : dimensionLetters[1];
    };

    // 각 차원별 최종 결과 산출
    const finalEI = getDimensionResult(['E', 'I']);
    const finalSN = getDimensionResult(['S', 'N']);
    const finalTF = getDimensionResult(['T', 'F']);
    const finalJP = getDimensionResult(['J', 'P']);

    // 최종 MBTI 결과
    return finalEI + finalSN + finalTF + finalJP;
  }

  return (
    <div className={styles.question}>
      <h1>Question.{currentIndex + 1}</h1>
      {questions.length > 0 ? (
        <QuestionBox
          questionData={questions[currentIndex]}
          onAnswerClick={(selectedAnswer) => handleAnswer(selectedAnswer)}
        />
      ) : (
        <Loading/> 
      )}
    </div>
  );
}
