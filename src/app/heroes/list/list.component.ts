import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: Array<string> = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public numero: number = 2;
  public deleteHero: string = '';

  deleteLastHero() {
    this.deleteHero = this.heroNames.pop()!;
  }
}
