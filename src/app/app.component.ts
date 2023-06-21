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
    // this.counter++;
    this.store.dispatch(actions.increment())
  }
  

  decreaseCounter() {
    // this.counter--;
    this.store.dispatch(actions.decrement())
  }

  constructor(private store: Store<AppState>) {
    this.store
    .subscribe( state =>{
      console.log(state);
      this.counter = state.counter;
    })
  }
}
