import { Component, Input, OnInit } from '@angular/core';

export class Result {
  correctAnswers: number;
  questions: number;

  public constructor(amountOfQuestions: number, amountOfCorrectAnswers: number) {
    this.questions = amountOfQuestions;
    this.correctAnswers = amountOfCorrectAnswers;
  }
}
@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
  @Input() result: Result = new Result(0, 0);

  constructor() { }

  ngOnInit(): void {
  }

}
