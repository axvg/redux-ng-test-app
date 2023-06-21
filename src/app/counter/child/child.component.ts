import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() counter!: number;
  @Output() public changeCounter = new EventEmitter<number>();

  multiplyCounter(){
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  divideCounter(){
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }

  constructor() {}
}
