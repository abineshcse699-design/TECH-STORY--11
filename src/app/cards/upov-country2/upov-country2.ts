import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({

  selector: 'upov-country2',
  standalone: true,
  imports: [MatCardModule, MatIconModule, NgClass],
    templateUrl: './upov-country2.html',
  styleUrl: './upov-country2.css',

})

export class CountryComponent2 {

  countryData = [
    {
      name: 'European Union (Community Plant Variety Office (C...',
      code: 'EUI',
      flag: 'https://flagcdn.com/w80/eu.png',
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
      office: "Plant Breeder's Rights"
    },
    {
      name: 'Bulgaria',
      code: 'BG',
      flag: 'https://flagcdn.com/w80/bg.png',
      person: '-',
      email: 'bpo@bg.net',
      phone: '+359 2 873 51 75',
      office: 'State Patent Office'
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: 'https://flagcdn.com/w80/au.png',
      person: 'James Donovan',
      email: 'j.donovan@australia.pvp.com',
      phone: '+54 11 4349 1354',
      office: "Plant Breeder's Rights",
      half: true   // 👈 this one will be half width
    }
  ];

}










