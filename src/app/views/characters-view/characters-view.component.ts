import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character';
import { BaseSchema } from '../../models/baseSchema';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable, Subscription } from 'rxjs';
import { CharacterCardComponent } from "./character-card/character-card.component";
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { InfoModel } from '../../models/infoModel';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-characters-view',
  standalone: true,
  imports: [MatGridListModule, CharacterCardComponent, PaginatorComponent],
  templateUrl: './characters-view.component.html',
  styleUrl: './characters-view.component.css'
})
export class CharactersViewComponent implements OnInit, OnDestroy {

  private data!: BaseSchema<Character>;

  info!: InfoModel;
  characters: Array<Character> = [];

  private sub!: Subscription;

  page: number = 1;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }
  
  onPageChanged(e: PageEvent) {
    this.page = e.pageIndex + 1;

    this.router.navigateByUrl(`/characters?page=${this.page}`);

    this.getCharactersData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.parsePageParam();

    this.getCharactersData();
  }

  private parsePageParam() {
    if (this.route.snapshot.queryParamMap.has("page")) {
      this.page = Number.parseInt(this.route.snapshot.queryParamMap.get("page") ?? "1");
    }
  }

  private getCharactersData() {
    this.sub = this.characterService.getCharacters(this.page).subscribe({
      next: data => {
        this.data = data;
        this.characters = data.results;
        this.info = data.info;
      },
      error: err => {
        
      },
      complete: () => {

      }
    });
  }
}
