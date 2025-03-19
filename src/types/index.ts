interface Answer {
    text: string;
    value: string;
  };
  
export interface Question {
    id:number;
    question: string;
    answers: Answer[];
};

// 캐릭터 목록

interface DetailedDescription  {
  title:string;
  des1:string;
  des2:string;
}
interface Character {
  name: string;
  movie: string;
};
interface Representative {
  name: string;
  movie: string;
  mainDes: string;
  detailedDescription : DetailedDescription [];
  keywords: string[];
};
export interface ResultProps {
  characters: Character[];
  representative:Representative;
  incompatible: string;
  compatible: string;
};
export interface DataProps {
  [key: string]: ResultProps;
}