import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { reset } from '../counter.action';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent {
  counter!: number;

  ngOnInit() {
    this.store.select('counter')
    .subscribe(counter => this.counter = counter);
  }

  resetCounter(){
    this.store.dispatch(reset());
  }

  constructor(private store: Store<AppState>) {}
}
