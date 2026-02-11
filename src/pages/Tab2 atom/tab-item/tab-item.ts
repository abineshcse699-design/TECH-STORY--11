import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-item.html',
  styleUrls: ['./tab-item.css'],
})
export class TabItemAtom {
  @Input() label!: string;
  @Input() active = false;
}
