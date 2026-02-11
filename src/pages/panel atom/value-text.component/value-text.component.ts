import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-value-text',
  standalone: true,
  template: `<span class="upov-value">{{ value }}</span>`,
  styleUrl: './value-text.component.css',
})
export class ValueTextComponent {
  @Input() value = '';
}
