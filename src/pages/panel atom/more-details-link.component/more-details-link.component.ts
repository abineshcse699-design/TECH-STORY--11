import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-more-details-link',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './more-details-link.component.html',
  styleUrl: './more-details-link.component.css',
})
export class MoreDetailsLinkComponent {
  @Input() expanded = false;
}
