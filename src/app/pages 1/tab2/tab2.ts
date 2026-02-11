import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; // Add this
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './tab2.html',
  styleUrl: './tab2.css',
})
export class Tab2 {
  displayedColumns: string[] = ['id', 'type', 'modified', 'crop', 'denomination', 'reference', 'actions'];

  // Columns for the filter row
  filterDisplayColumns: string[] = ['id-filter', 'type-filter', 'modified-filter', 'crop-filter', 'denomination-filter', 'reference-filter', 'actions-filter'];

  filterColumns = [
    { filterDef: 'id-filter', placeholder: 'International Refere...' },
    { filterDef: 'type-filter', placeholder: 'Application data for' },
    { filterDef: 'modified-filter', placeholder: 'Modifi...' },
    { filterDef: 'crop-filter', placeholder: 'Crop' },
    { filterDef: 'denomination-filter', placeholder: 'Proposed variety...' },
    { filterDef: 'reference-filter', placeholder: 'Breeder/Submitter re...' },
    { filterDef: 'actions-filter', placeholder: '' }
  ];

  dataSource = new MatTableDataSource([
    { id: 'XU_30202600000002', type: 'PBR', modified: '10/12/2024', crop: 'Lactuca sativa L.', denomination: 'testccc', reference: 'test viet nam' },
    { id: 'XU_30202500000155', type: 'National Listing (VL)', modified: '12/06/2024', crop: 'Solanum lycopersicum L.', denomination: '', reference: 'TEST DEN' },
    { id: 'XU_30202500000154', type: 'PBR', modified: '08/06/2024', crop: 'Allium oschaninii O. Fedtsch.', denomination: 'Shallot variety', reference: '' },
    { id: 'XU_30202500000145', type: 'PBR', modified: '21/04/2024', crop: 'Cucumis melo L.', denomination: 'MELON VARIETY', reference: 'ggs' },
    { id: 'NA', type: 'PBR and National Listing', modified: '08/04/2024', crop: 'Helianthus annuus L.', denomination: 'TEST GEN', reference: 'TEST DEN' },
  ]);
}
