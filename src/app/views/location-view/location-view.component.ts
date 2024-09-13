import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Location } from '../../models/location';
import { LocationService } from '../../services/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location-view',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './location-view.component.html',
  styleUrl: './location-view.component.css'
})
export class LocationViewComponent implements OnInit, OnDestroy {
  locations: Array<Location> = [];

  private sub!: Subscription;

  constructor(
    private service: LocationService
  ) {
    
  }

  ngOnInit(): void {
    this.getLocations();  
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

  private getLocations() {
    this.sub = this.service.getLocations()
      .subscribe(n => {
        this.locations = n.results;
      })
  }
}
