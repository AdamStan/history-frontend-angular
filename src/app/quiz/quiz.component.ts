import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from '../quiz.service'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() amountOfQuestions: number = 0;
  currentQuestion: number = 0;
  questions: Question[] = [];
  answerSelected: boolean = false;
  correctAnswers: number = 0;
  result: boolean = false;
  end: boolean = false;

  constructor(private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions(this.amountOfQuestions);
  }

  onAnswer(chosenAnswer: String): void {
    this.answerSelected = true;
    if (this.questions[this.currentQuestion].correctAnswer == chosenAnswer) {
      this.correctAnswers++;
    }
    setTimeout(() => {
      this.currentQuestion++;
      this.answerSelected = false;
      if (this.questions.length <= this.currentQuestion) {
        this.end = true;
      }
    }, 1000);
  }

  showResult(): void {
    this.result = true;
  }

}
