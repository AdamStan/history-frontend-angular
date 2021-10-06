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
  data: Question[] = exampleData;

  constructor() { }

  getQuestions() : Question[] {
    return this.data;
  }
}
