import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-label-text',
  standalone: true,
  template: `<span class="upov-label">{{ text }}</span>`,
  styleUrl: './label-text.component.css',
})
export class LabelTextComponent {
  @Input() text = '';
}
