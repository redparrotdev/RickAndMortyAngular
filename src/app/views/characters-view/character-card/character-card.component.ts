import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../../models/character';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: Character;
  
  @Input() small: boolean = false;

  getStatusIconColor() : string {
    if (this.character.status == "Alive") return "green";
    if (this.character.status == "Dead") return "red";
    return "orange";
  }

  getCharacterType() : string{
    if (this.character.type == "") return "Generic";

    return this.character.type;
  }
}
