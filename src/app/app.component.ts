import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-ng-test-app';
  counter!: number;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  constructor() {
    this.counter = 10;
  }
}
