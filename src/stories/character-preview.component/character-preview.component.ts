import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CharacterSection {
  id: number;
  title: string;
  type: string;
  levels: string[];
  examples: string[];
  notes: string[];
}

@Component({
  selector: 'app-character-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-preview.component.html',
  styleUrls: ['./character-preview.component.css']
})
export class CharacterPreviewComponent {

  @Input() title = 'List of Characteristics';
  @Input() sections: CharacterSection[] = [];

}
