import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'upov-country-card',
  standalone: true,
  imports: [MatCardModule, NgIf],
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCard {

  @Input() name!: string;
  @Input() code!: string;
  @Input() flag?: string;
  @Input() person?: string;
  @Input() phone?: string;
  @Input() email?: string;
  @Input() office?: string;

}
