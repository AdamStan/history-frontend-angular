import { Injectable } from '@angular/core';
import  *  as exampleData from './mock/quiz.json';


export interface Question {
  content: String;
  correctAnswer: String;
  otherAnswers: String[]
}
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // example data is an Object {} - I don't know if it should be used "Object.values"
  data: Question[] = Object.values(exampleData);

  constructor() { }

  getQuestions(amount:number=10) : Question[] {
    return this.data.slice(0, amount);
  }
}
