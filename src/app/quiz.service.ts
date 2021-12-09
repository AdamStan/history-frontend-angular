import { Injectable } from '@angular/core';
import  *  as exampleData from './mock/quiz.json';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

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
    return this.http.get<Question[]>(`/quiz/v1/questions/${amount}/`).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse): ObservableInput<never> {
    window.alert("There is a problem with getting a quiz, sorry for that :c")
    console.error(error);
    return throwError(error);
  }
}
