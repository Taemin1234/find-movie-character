"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import QuestionBox from "@/components/question-box";
import {Question} from '@/types'


export default function QuestionPage() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [questions, setQuestions] = useState<Question[]>([]);
    // const router = useRouter();

  useEffect(() => {
    fetch("/data/question.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  console.log(questions[0]?.question)


  return (
    <div>
      <h1>질문 목록</h1>
      {questions.length > 0 ? (
        questions.map((q) => (
        //   <div key={q.id}>
        //     <h2>{q.question}</h2>
        //     <ul>
        //         {/* {q.answers} */}
        //     </ul>
        //   </div>
            <QuestionBox />
        ))
      ) : (
        <p>데이터 로딩 중...</p>
      )}
    </div>
  );
}
