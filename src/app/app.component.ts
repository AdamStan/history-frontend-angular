import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'history-frontend-angular';
  amountOfQuestions: number = 10;
  quizStart: boolean = false;

  startQuiz(): void {
    this.quizStart = true;
  }
}
