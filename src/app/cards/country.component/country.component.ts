import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-country',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  countryData = [
    {
      name: 'European Union (Community Plant Variety Office (C...',
      code: 'EUI',
        flag: 'https://flagcdn.com/w80/eu.png', // Replace with your actual paths
      person: 'Mariano Mangieri',
      email: 'mariano.mangieri@australia.pvp.com',
      phone: '+54 11 4349 1354',
      office: 'Plant Variety Protection Off...'
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: 'https://flagcdn.com/w80/au.png',
      person: 'James Donovan',
      email: 'j.donovan@australia.pvp.com',
      phone: '+54 11 4349 1354',
      office: 'Plant Breeder\'s Rights'
    }
  ];
}
