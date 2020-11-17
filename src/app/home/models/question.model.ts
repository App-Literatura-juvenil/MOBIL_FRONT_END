import { Answer } from './answer.model';

export class Question{
    idQuestion: number;
        textQuestion: string;
        createdAt:string;
        updatedAt:string;
        idBook:number;
        answers:Answer[];
        selectedAnswer: number;
}