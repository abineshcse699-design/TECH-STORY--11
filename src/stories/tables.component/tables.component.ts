import { Component, Input } from '@angular/core';
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

  @Input() activeTab: 'progress' | 'submitted' = 'progress';
  @Input() showFilters = true;
  @Input() dataSource: TableRow[] = [];

  displayedColumns: string[] = [
    'ref',
    'application',
    'modified',
    'crop',
    'denomination',
    'breeder',
    'actions'
  ];

}
