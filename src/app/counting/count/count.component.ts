import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  public exercise: string = '';
  public previousAnswer: string = '';
  private numberOne: number = 0;
  private numberTwo: number = 0;

  constructor(
  ) {}


  ngOnInit(): void {
    this.getMathExercise();
  }

  public goNextExercise(): void {
    this.getAnswerPreviousExercise();
    this.getMathExercise();
  }

  private getMathExercise(): string {
    this.numberOne = Math.round(Math.random() * 10);
    this.numberTwo = Math.round(Math.random() * 10);
    return this.exercise = `${this.numberOne} + ${this.numberTwo}`
  }

  private getAnswerPreviousExercise(): string {
    return this.previousAnswer = `${this.exercise} = ${this.numberOne + this.numberTwo}`;
  }
}
