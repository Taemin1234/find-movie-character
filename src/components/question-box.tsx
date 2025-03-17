import Button from "../components/button";
import { Question } from '@/types'

interface QuestionBoxProps {
    questionData: Question;
    onAnswerClick: (answer: string) => void;
};

export default function QuestionBox({ questionData, onAnswerClick }: QuestionBoxProps) {
    return (
        <div>
            <p>{questionData.question}</p>
            <div key={questionData.id}>
                {questionData.answers.map((ans, i) => (
                    <Button key={i} content={ans.text} onClick={() => onAnswerClick(ans.value)} />
                ))}
            </div>
        </div>
    );
}
