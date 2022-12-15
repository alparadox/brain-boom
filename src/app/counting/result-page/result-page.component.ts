import { Component, OnInit } from '@angular/core';
import {ClickCountService} from "../services/click-count.service";

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  constructor(
    public clickCount: ClickCountService,
  ) { }

  ngOnInit(): void {
  }

}
