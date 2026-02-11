import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-type-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-method.component.html',
  styleUrls: ['./type-method.component.css']
})
export class TypeMethodComponent {
  @Input() type!: string;
  @Input() method!: string;
}
