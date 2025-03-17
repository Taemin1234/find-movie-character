interface Answer {
    text: string;
    value: string;
  };
  
export interface Question {
    id:number;
    question: string;
    answers: Answer[];
};