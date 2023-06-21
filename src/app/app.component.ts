import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.action';


interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-ng-test-app';
  counter!: number;

  increaseCounter() {
    this.store.dispatch(actions.increment())
  }
  
  decreaseCounter() {
    this.store.dispatch(actions.decrement())
  }

  constructor(private store: Store<AppState>) {
    this.store.select('counter')
    .subscribe( counter =>{
      this.counter = counter;
    })
  }
}
