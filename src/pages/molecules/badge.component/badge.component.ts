import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'upov-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {

  @Input() status: string = 'Pending revision';

  get statusClass(): string {
    const value = this.status?.toLowerCase();

    if (value.includes('approved')) return 'approved';
    if (value.includes('rejected')) return 'rejected';
    if (value.includes('pending')) return 'pending';

    return 'default';
  }
}
