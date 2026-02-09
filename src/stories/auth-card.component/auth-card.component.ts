import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-auth-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './auth-card.component.html',
  styleUrls: ['./auth-card.component.css']
})
export class AuthCard {

  @Input() category: string = 'ANANA';
  @Input() botanicalName: string = 'Ananas Mill.';
  @Input() primaryName: string = 'Pineapple';
  @Input() family: string = 'Bromeliaceae';
  @Input() imageUrl?: string | null;
  @Input() updated: boolean = true;

}
