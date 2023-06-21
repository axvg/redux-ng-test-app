import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  resetCounter(){
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }
}
