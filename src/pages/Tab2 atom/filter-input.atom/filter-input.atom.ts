import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule],
  templateUrl: './filter-input.atom.html',
  styleUrls: ['./filter-input.atom.css'],
})
export class FilterInputAtom {
  @Input() placeholder!: string;
  @Input() calendar = false;
}
