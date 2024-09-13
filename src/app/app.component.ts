import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { INavItem } from './sidenav/nav-item.interface';
import { NavItemsComponent } from './sidenav/nav-items/nav-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, NavItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty-api-frontend';

  navItems: Array<INavItem> = [
    {content: "Characters", url: "characters"},
    {content: "Locations", url: "locations"},
    {content: "Episodes", url: "episodes"}
  ]
}
