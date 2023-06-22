import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.action'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  counter!: number;

  ngOnInit(){
    this.store.select('counter')
    .subscribe(counter => this.counter = counter)
  }

  multiplyCounter(){
    this.store.dispatch(actions.multiply({factor: 5}));
  }

  divideCounter(){
    this.store.dispatch(actions.divide({factor: 10}));
  }

  constructor(private store: Store<AppState>) {}
}
