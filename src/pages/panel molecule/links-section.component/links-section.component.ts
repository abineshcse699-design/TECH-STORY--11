import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-links-section',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './links-section.component.html',
  styleUrls: ['./links-section.component.css'],
})
export class LinksSectionComponent {
  @Input() links: string[] = [];
}
