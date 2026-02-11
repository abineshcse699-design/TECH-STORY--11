import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteristicTitleComponent } from '../../Card3 Atom/characteristic-title.component/characteristic-title.component';

import { DetailRowComponent }from '../../Card3 Atom/detail-row.component/detail-row.component';

export interface CharacteristicDetail {
  label: string;
  variety: string;
  note: string;
}

@Component({
  selector: 'upov-characteristic-details',
  standalone: true,
  imports: [
    CommonModule,
    CharacteristicTitleComponent,
    DetailRowComponent
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  @Input() title: string = '';
  @Input() details: CharacteristicDetail[] = [];
}
