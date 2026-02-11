import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card3',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule],
  templateUrl: './card3.html',
  styleUrl: './card3.css',
})
export class Card3 {
  displayedColumns: string[] = ['drag', 'id', 'english', 'varieties', 'notes', 'delete'];

  dataSource = [
    {
      id: '1', star: false, type: 'QN', method: 'MG/VG', title: 'Tree: vigor',
      details: [
        { label: 'very weak', variety: "Grenadier, Nield's Drooper", note: '1' },
        { label: 'very weak to weak', variety: 'James Grieve, Redkan', note: '2' },
        { label: 'weak', variety: 'Alkmene, Regine', note: '3' },
        { label: 'weak to medium', variety: 'Piros, Pomforyou, Renora', note: '4' },
        { label: 'medium', variety: 'Gala, Pinova, Trajan', note: '5' },
        { label: 'medium to strong', variety: 'Dalili, Pia, Pivita', note: '6' },
        { label: 'strong', variety: 'Elstar, Rafzubin, Santana', note: '7' },
        { label: 'strong to very strong', variety: 'Bay 3484, Collina, Cripps Pink', note: '8' },
        { label: 'very strong', variety: 'Gloster, Ingrid Marie', note: '9' }
      ]
    },
    {
      id: '2', star: true, type: 'QL', method: 'VG', title: 'Tree: type',
      details: [
        { label: 'columnar', variety: 'MacExcel, Wijcik', note: '1' },
        { label: 'ramified', variety: 'Elstar, Golden Delicious', note: '2' }
      ]
    },
    {
      id: '3', star: true, type: 'QN', method: 'MG/VG', title: 'Leaf: length',
      details: [
        { label: 'very shortstzsrtz', variety: 'Kasumi', note: '1' },
        { label: 'medium', variety: '', note: '2' },
        { label: '5', variety: 'variety B', note: '3' }
      ]
    },
    {
      id: '4', star: false, type: 'QL', method: 'MS', title: 'restistance test',
      details: [
        { label: 'absent', variety: '', note: '1' },
        { label: 'present', variety: '', note: '9' }
      ]
    }
  ];
}
