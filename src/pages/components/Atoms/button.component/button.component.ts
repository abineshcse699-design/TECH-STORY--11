import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from '../icon.component/icon.component';   // 👈 ADD THIS

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    IconComponent   // 👈 ADD THIS
  ],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() icon?: string;
  @Input() disabled: boolean = false;
}
