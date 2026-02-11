import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="icon" [innerHTML]="svg"></span>
  `,
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() svg!: string;
}
