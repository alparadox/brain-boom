import { Component, OnInit } from '@angular/core';
import {ExerciseHistoryService} from "../exercise-history.service";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  public exercise: string = '';
  private numberOne: number = 0;
  private numberTwo: number = 0;

  constructor(
    private exerciseHistoryService: ExerciseHistoryService
  ) {}


  ngOnInit(): void {
    this.getMathExercise();
  }

  public getMathExercise(): string {
    this.numberOne = Math.round(Math.random() * 10);
    this.numberTwo = Math.round(Math.random() * 10);
    return this.exercise = `${this.numberOne} + ${this.numberTwo}`
  }
}
