import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './app-character.component.html',
  styleUrls: ['./app-character.component.css']
})
export class AppCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit({ ...this.character });
    this.character.name = '';
    this.character.power = 0;
  }
}
