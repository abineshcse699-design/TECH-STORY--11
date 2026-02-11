import { Component, Input } from '@angular/core';
import { LabelTextComponent } from '../../panel atom/label-text.component/label-text.component';
import { ValueTextComponent } from '../../panel atom/value-text.component/value-text.component';

@Component({
  selector: 'upov-info-item',
  standalone: true,
  imports: [LabelTextComponent, ValueTextComponent],
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css'],
})
export class InfoItemComponent {
  @Input() label = '';
  @Input() value = '';
}
