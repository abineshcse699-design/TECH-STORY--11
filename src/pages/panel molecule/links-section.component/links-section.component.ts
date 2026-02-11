import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-links-section',
  standalone: true,
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.css'],
})
export class LinksSectionComponent {
  @Input() links: string[] = [];
}
