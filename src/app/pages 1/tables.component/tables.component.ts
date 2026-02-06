import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export interface TableRow {
  ref: string;
  application: string;
  modified: string;
  crop: string;
  denomination: string;
  breeder: string;
}

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule
  ],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  activeTab: 'progress' | 'submitted' = 'progress';
  showFilters = true;

  displayedColumns: string[] = [
    'ref',
    'application',
    'modified',
    'crop',
    'denomination',
    'breeder',
    'actions'
  ];

  dataSource: TableRow[] = [
    {
      ref: 'XU_30202600000002',
      application: 'PBR',
      modified: '10/12/2024',
      crop: 'Lactuca sativa L.',
      denomination: 'testccc',
      breeder: 'test viet nam'
    },
    {
      ref: 'XU_30202500000155',
      application: 'National Listing (VL)',
      modified: '12/06/2024',
      crop: 'Solanum lycopersicum L.',
      denomination: '',
      breeder: 'TEST DEN'
    },
    {
      ref: 'XU_30202500000154',
      application: 'PBR',
      modified: '08/06/2024',
      crop: 'Allium oschaninii O. Fedtsch.',
      denomination: 'Shallot variety',
      breeder: ''
    },
    {
      ref: 'XU_30202500000145',
      application: 'PBR',
      modified: '21/04/2024',
      crop: 'Cucumis melo L.',
      denomination: 'MELON VARIETY',
      breeder: 'ggs'
    }
  ];



}
