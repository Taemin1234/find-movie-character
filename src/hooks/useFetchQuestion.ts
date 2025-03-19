import { useState, useEffect } from "react";
import { Question } from '@/types'

export function useFetchQuestion() {
    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await fetch("/data/question.json");
            if (!response.ok) throw new Error("Failed to fetch questions");
            const data = await response.json();
            setQuestions(data);
          } catch (error) {
            console.error("Error fetching JSON:", error);
            setQuestions([]); // 기본 빈 배열을 설정하여 앱이 깨지지 않도록 처리
          }
        };
      
        fetchQuestions();
      }, []);

    return questions
}