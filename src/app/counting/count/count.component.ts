import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {Router} from "@angular/router";
import {ClickCountService} from "../services/click-count.service";

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
  public time: any;

  constructor(
    private router: Router,
    private clickCount: ClickCountService,
  ) {}


  ngOnInit(): void {
    this.getMathExercise();
    this.startTimer();
  }

  public goNextExercise(): void {
    this.getAnswerPreviousExercise();
    this.getMathExercise();
    this.countClickOnButton()
  }

  private countClickOnButton(): number {
    return this.clickCount.count++;
  }

  private startTimer(): void {
    timer(0, 1000).subscribe(time => {
      this.time = new Date(0, 0, 0,0,0, time);
      if (time === 60) {
        this.router.navigate(['/count/result']);
      }
    });
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
