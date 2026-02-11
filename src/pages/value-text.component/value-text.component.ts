import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-value-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-text.component.html',
  styleUrls: ['./value-text.component.css']
})
export class ValueTextComponent {
  @Input() text = '';
}
