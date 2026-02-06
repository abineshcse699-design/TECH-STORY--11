import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>more_horiz</mat-icon>
    </button>

    <mat-menu #menu="matMenu">
      <button mat-menu-item (click)="onView()">View</button>
      <button mat-menu-item (click)="onEdit()">Edit</button>
      <button mat-menu-item (click)="onDelete()">Delete</button>
    </mat-menu>
  `,
  styles: [`
    button[mat-icon-button] {
      color: #555;
    }

    button[mat-menu-item] {
      font-size: 14px;
    }
  `]
})
export class ActionMenuComponent {

  @Output() view = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  onView() { this.view.emit(); }
  onEdit() { this.edit.emit(); }
  onDelete() { this.delete.emit(); }

}
