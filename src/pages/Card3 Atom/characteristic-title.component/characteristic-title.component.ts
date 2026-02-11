import { Component, Input } from '@angular/core';

@Component({
  selector: 'upov-characteristic-title',
  standalone: true,
  templateUrl: './characteristic-title.component.html',
  styleUrls: ['./characteristic-title.component.css']
})
export class CharacteristicTitleComponent {
  @Input() title!: string;
}
