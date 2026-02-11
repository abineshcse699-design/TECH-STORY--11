import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-star-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-indicator.componen.html',
  styleUrls: ['./star-indicator.componen.css']
})
export class StarIndicatorComponent {
  @Input() star!: boolean;
}
