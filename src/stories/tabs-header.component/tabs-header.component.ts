import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-header.component.html',
  styleUrls: ['./tabs-header.component.css']
})
export class TabsHeaderComponent {

  @Input() active: 'progress' | 'submitted' = 'progress';
  @Output() tabChange = new EventEmitter<'progress' | 'submitted'>();

  selectTab(tab: 'progress' | 'submitted') {
    this.active = tab;
    this.tabChange.emit(tab);
  }

}
