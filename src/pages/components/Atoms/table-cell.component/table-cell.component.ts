import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {
  @Input() value!: string;
  @Input() isLink: boolean = false;
}
