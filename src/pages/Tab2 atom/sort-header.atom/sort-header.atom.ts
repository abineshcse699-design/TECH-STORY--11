import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './sort-header.atom.html',
  styleUrls: ['./sort-header.atom.css'],
})
export class SortHeaderAtom {
  @Input() label!: string;
  @Input() icon: string = 'sort';
}
