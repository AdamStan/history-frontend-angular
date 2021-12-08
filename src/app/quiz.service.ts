import { Injectable } from '@angular/core';
import  *  as exampleData from './mock/quiz.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  getQuestions(amount:number=10) : Question[] {
    return this.data.slice(0, amount);
  }

  getQuestionsFromServer(amount:number = 10) : Observable<Question[]> {
    return this.http.get<Question[]>(`/quiz/v1/questions/${amount}/`);
  }
}
