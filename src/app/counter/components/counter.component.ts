import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>

  <button type="button" (click)="increaseBy(+1)" class="btn btn-primary" >+1</button>
  <button (click)="resetCounter()" class="btn btn-primary m-1">Reset</button>
  <button (click)="increaseBy(-1)" class="btn btn-primary">-1</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}