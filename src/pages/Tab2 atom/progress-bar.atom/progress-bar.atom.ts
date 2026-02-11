import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.atom.html',
  styleUrls: ['./progress-bar.atom.css'],
})
export class ProgressBarAtom {
  @Input() value = 0;
}
