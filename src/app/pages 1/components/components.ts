import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';

export interface ApplicationData {
  reference: string;
  application: string;
  modified: string;
  crop: string;
  denomination: string;
  breeder: string;
}



@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatMenuModule,
    MatSortModule,
  ],
  templateUrl: './components.html',
  styleUrls: ['./components.css']
})
export class Components {


  displayedColumns: string[] = [
    'reference',
    'application',
    'modified',
    'crop',
    'denomination',
    'breeder',
    'actions'
  ];

  dataSource: ApplicationData[] = [
    {
      reference: 'XU_30202600000002',
      application: 'PBR',
      modified: '10/12/2024',
      crop: 'Lactuca sativa L.',
      denomination: 'testccc',
      breeder: 'test viet nam'
    },
    {
      reference: 'XU_30202500000155',
      application: 'National Listing (VL)',
      modified: '12/06/2024',
      crop: 'Solanum lycopersicum L.',
      denomination: '',
      breeder: 'TEST DEN'
    },
    {
      reference: 'XU_30202500000154',
      application: 'PBR',
      modified: '08/06/2024',
      crop: 'Allium oschaninii O. Fedtsch.',
      denomination: 'Shallot variety',
      breeder: ''
    }
  ];

}

