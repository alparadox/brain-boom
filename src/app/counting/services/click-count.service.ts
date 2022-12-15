import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCountService {

  count: number = 1;

  constructor() { }
}
