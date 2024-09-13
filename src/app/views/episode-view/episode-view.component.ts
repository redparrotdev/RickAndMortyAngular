import { Component, OnDestroy, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Subscription } from 'rxjs';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-episode-view',
  standalone: true,
  imports: [],
  templateUrl: './episode-view.component.html',
  styleUrl: './episode-view.component.css'
})
export class EpisodeViewComponent implements OnInit, OnDestroy {
  
  episodes: Array<Episode> = [];

  private sub!: Subscription;
  
  constructor(
    private service: EpisodeService
  ) {

  }

  private getEpisodes() {
    this.sub = this.service.getEpisodes()
      .subscribe(e => this.episodes = e.results);
  }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this.getEpisodes();
  }
}
