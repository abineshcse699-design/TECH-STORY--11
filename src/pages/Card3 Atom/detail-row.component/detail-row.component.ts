import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-detail-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.css']
})
export class DetailRowComponent {
  @Input() label!: string;
  @Input() variety!: string;
  @Input() note!: string;
}
