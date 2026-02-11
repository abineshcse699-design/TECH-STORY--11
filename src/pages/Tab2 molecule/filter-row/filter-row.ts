import { Component } from '@angular/core';
import { FilterInputAtom } from '../../Tab2 atom/filter-input.atom/filter-input.atom';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-row',
  standalone: true,
  imports: [CommonModule, FilterInputAtom],
  templateUrl: './filter-row.html',
  styleUrls: ['./filter-row.css'],
})
export class FilterRowMolecule {}
