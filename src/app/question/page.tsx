"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuestionBox from "@/components/question-box";
import { Question } from '@/types'


export default function QuestionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/data/question.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  const handleAnswer = (answer: string) => {
    setQuestions((prev) => [...prev, answer]);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.push("/result");
    }
  };


  return (
    <div>
      <h1>Question.{currentIndex + 1}</h1>
      {questions.length > 0 ? (
        <QuestionBox
          questionData={questions[currentIndex]}
          onAnswerClick={(selectedAnswer) => handleAnswer(selectedAnswer)}
        />
      ) : (
        <p>데이터 로딩 중...</p>
      )}
    </div>
  );
}
