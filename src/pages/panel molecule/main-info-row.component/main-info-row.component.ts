import { Component, Input } from '@angular/core';
import { InfoItemComponent } from '../info-item.component/info-item.component';
import { PrimaryButtonComponent } from '../../panel atom/primary-button.component/primary-button.component';

@Component({
  selector: 'upov-main-info-row',
  standalone: true,
  imports: [InfoItemComponent, PrimaryButtonComponent],
  templateUrl: './main-info-row.component.html',
  styleUrls: ['./main-info-row.component.css'],
})
export class MainInfoRowComponent {
  @Input() name = '';
  @Input() codes = '';
}
