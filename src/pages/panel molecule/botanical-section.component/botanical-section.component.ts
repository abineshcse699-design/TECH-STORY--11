import { Component, Input } from '@angular/core';
import { LabelTextComponent } from '../../panel atom/label-text.component/label-text.component';

@Component({
  selector: 'upov-botanical-section',
  standalone: true,
  imports: [LabelTextComponent],
  templateUrl: './botanical-section.component.html',
  styleUrls: ['./botanical-section.component.css'],
})
export class BotanicalSectionComponent {
  @Input() botanicalText = '';
}
