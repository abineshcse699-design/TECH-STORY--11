import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-action-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './action-icon.atom.html',
  styleUrls: ['./action-icon.atom.css'],
})
export class ActionIconAtom {}
