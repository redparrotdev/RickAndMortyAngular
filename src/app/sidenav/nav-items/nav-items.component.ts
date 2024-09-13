import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { INavItem } from '../nav-item.interface';

@Component({
  selector: 'app-nav-items',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './nav-items.component.html',
  styleUrl: './nav-items.component.css'
})
export class NavItemsComponent {
  @Input() navItems: Array<INavItem> = [];
}
