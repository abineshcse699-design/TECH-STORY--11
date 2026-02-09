import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {
  displayedColumns: string[] = ['id', 'type', 'modified', 'crop', 'denomination', 'reference', 'actions'];

  dataSource = new MatTableDataSource([
    { id: 'XU_30202600000002', type: 'PBR', modified: '10/12/2024', crop: 'Lactuca sativa L.', denomination: 'testccc', reference: 'test viet nam' },
    { id: 'XU_30202500000155', type: 'National Listing (VL)', modified: '12/06/2024', crop: 'Solanum lycopersicum L.', denomination: '', reference: 'TEST DEN' },
    { id: 'XU_30202500000154', type: 'PBR', modified: '08/06/2024', crop: 'Allium oschaninii O. Fedtsch.', denomination: 'Shallot variety', reference: '' },
    { id: 'XU_30202500000145', type: 'PBR', modified: '21/04/2024', crop: 'Cucumis melo L.', denomination: 'MELON VARIETY', reference: 'ggs' },
    { id: 'NA', type: 'PBR and National Listing', modified: '08/04/2024', crop: 'Helianthus annuus L.', denomination: 'TEST GEN', reference: 'TEST DEN' },
  ]);
}
