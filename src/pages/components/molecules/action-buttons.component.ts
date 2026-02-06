import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../Atoms/button.component/button.component';

@Component({
  selector: 'app-action-buttons',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="actions">
      <app-button icon="filter_list" (click)="onFilter()">
        Show Filters
      </app-button>

      <app-button icon="view_column" (click)="onColumns()">
        Columns
      </app-button>
    </div>
  `,
  styles: [`
    .actions {
      display: flex;
      gap: 24px;
      align-items: center;
    }
  `]
})
export class ActionButtonsComponent {

  @Output() filterClick = new EventEmitter<void>();
  @Output() columnClick = new EventEmitter<void>();

  onFilter() {
    this.filterClick.emit();
  }

  onColumns() {
    this.columnClick.emit();
  }

}
