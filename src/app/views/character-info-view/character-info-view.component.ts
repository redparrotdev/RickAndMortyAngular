import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { Subscription } from 'rxjs';
import { CharacterCardComponent } from "../characters-view/character-card/character-card.component";
import { LocationService } from '../../services/location.service';
import { Episode } from '../../models/episode';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-character-info-view',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-info-view.component.html',
  styleUrl: './character-info-view.component.css'
})
export class CharacterInfoViewComponent implements OnDestroy {
  character?: Character;
  episodes: Array<Episode> = []

  private sub!: Subscription;

  constructor(
    private service: CharacterService,
    private location: LocationService,
    private episode: EpisodeService
  ) {

  }
  
  @Input()
  set id(characterId: string) {
    let charId = Number(characterId);
    
    this.sub = this.service.getSingleCharacter(charId).subscribe({
      next: (c) => {
        this.character = c;
        this.episode.getManyByUrls(c.episode)
          .subscribe(e => this.episodes = e);
      },
      error: (err) => {
        
      },
      complete: () => {
        
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
