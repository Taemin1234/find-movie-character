import styles from './question-box.module.css'
import Button from "../components/button";
import { Question } from '@/types'

interface QuestionBoxProps {
    questionData: Question;
    onAnswerClick: (answer: string) => void;
};

export default function QuestionBox({ questionData, onAnswerClick }: QuestionBoxProps) {
    return (
        <div className={styles.question_box_wrap}>
            <p className={styles.question}>{questionData.question}</p>
            <div key={questionData.id} className={styles.answer_wrap}>
                {questionData.answers.map((ans) => (
                    <Button key={ans.value} content={ans.text} type={'btn-answer'} onClick={() => onAnswerClick(ans.value)} />
                ))}
            </div>
        </div>
    );
}
