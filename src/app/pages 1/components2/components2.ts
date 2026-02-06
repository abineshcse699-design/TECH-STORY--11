import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-components2',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './components2.html',
  styleUrls: ['./components2.css']
})
export class Components2 {

  data = [
    {
      no: 1,
      code: 'QN',
      type: 'MG/VG',
      title: 'Tree: vigor',
      rows: [
        { english: 'very weak', example: 'Grenadier, Nield’s Drooper', note: 1 },
        { english: 'very weak to weak', example: 'James Grieve, Redkan', note: 2 },
        { english: 'weak', example: 'Alkmene, Regine', note: 3 },
        { english: 'weak to medium', example: 'Piros, Pomforyou, Renora', note: 4 },
        { english: 'medium', example: 'Gala, Pinova, Trajan', note: 5 },
        { english: 'medium to strong', example: 'Dalili, Pia, Pivita', note: 6 },
        { english: 'strong', example: 'Elstar, Rafzubin, Santana', note: 7 },
        { english: 'strong to very strong', example: 'Bay 3484, Collina, Cripps Pink', note: 8 },
        { english: 'very strong', example: 'Gloster, Ingrid Marie', note: 9 }
      ]
    },
    {
      no: 2,
      code: 'QL',
      type: 'VG',
      title: 'Tree: type',
      rows: [
        { english: 'columnar', example: 'MacExcel, Wijcik', note: 1 },
        { english: 'ramified', example: 'Elstar, Golden Delicious', note: 2 }
      ]
    },
    {
      no: 3,
      code: 'QN',
      type: 'MG/VG',
      title: 'Leaf: length',
      rows: [
        { english: 'very short', example: 'Kasumi', note: 1 },
        { english: 'medium', example: '', note: 2 },
        { english: '5', example: 'variety B', note: 3 }
      ]
    },
    {
      no: 4,
      code: 'QL',
      type: 'MS',
      title: 'resistance test',
      rows: [
        { english: 'absent', example: '', note: 1 },
        { english: 'present', example: '', note: 9 }
      ]
    }
  ];
}
