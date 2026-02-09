import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  
  templateUrl: './auth-card.html',
  styleUrls: ['./auth-card.css']
})

export class AuthCard {

  @Input() category = 'ANANA';
  @Input() botanicalName = 'Ananas Mill.';
  @Input() primaryName = 'Pineapple';
  @Input() family = 'Bromeliaceae';
  @Input() imageUrl?: string;
  @Input() updated = true;



}
