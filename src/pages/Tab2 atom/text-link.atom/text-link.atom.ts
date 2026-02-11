import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-text-link',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './text-link.atom.html',
  styleUrls: ['./text-link.atom.css'],
})
export class TextLinkAtom {
  @Input() icon!: string;
  @Input() label!: string;
}
