import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-card2',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './card2.html',
  styleUrl: './card2.css',
})
export class Card2 {
  // Data properties to make the card dynamic
  irnNumber: string = 'XU_30202600000002 (NLI)';
  status: string = 'Pending revision';

  constructor() {}

  // Action Methods
  onEdit() {
    console.log('Edit form clicked');
  }

  onPay() {
    console.log('Payment initiated');
  }

  onSign() {
    console.log('Sign application triggered');
  }

  onDelete() {
    if (confirm('Are you sure you want to delete this application?')) {
      console.log('Application deleted');
    }
  }

  onCopy() {
    navigator.clipboard.writeText(this.irnNumber);
    console.log('IRN copied to clipboard');
  }

  onDownload() {
    console.log('Downloading PDF...');
  }
}
