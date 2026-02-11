import { Component ,Input} from '@angular/core';

@Component({
  selector: 'upov-primary-button',
  standalone: true,
  template: `
    <button class="upov-primary-btn" [disabled]="disabled">
      {{ label }}
    </button>
  `,
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  @Input() label = '';
  @Input() disabled = false;
}
