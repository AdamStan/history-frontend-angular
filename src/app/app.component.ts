import { Component } from '@angular/core';
import { Result } from './show-result/show-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'history-frontend-angular';
  amountOfQuestions: number = 10;
  quizStart: boolean = false;
  resultsAreReady: boolean = false;
  result: Result = new Result(0,0);

  startQuiz(): void {
    this.quizStart = true;
    this.result.correctAnswers = 0;
    this.result.questions = this.amountOfQuestions;
  }

  endQuiz(end: boolean): void {
    this.quizStart = !end;
  }

  sendResult(correctAnswers: number): void {
    this.result.correctAnswers = correctAnswers;
  }

  showResults() :void {
    this.resultsAreReady = !this.resultsAreReady;
  }
}
