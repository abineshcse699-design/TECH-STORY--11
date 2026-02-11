import { Component,Input } from '@angular/core';
@Component({
  selector: 'upov-meta-text',
  standalone: true,
  template: `
    <div class="upov-meta">
      {{ tgCode }} <br />
      {{ saveDate }}
    </div>
  `,
  styleUrl: './meta-text.component.css',
})
export class MetaTextComponent {
  @Input() tgCode = '';
  @Input() saveDate = '';
}
