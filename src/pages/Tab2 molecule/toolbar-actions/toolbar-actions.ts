import { Component } from '@angular/core';
import { TextLinkAtom } from '../../Tab2 atom/text-link.atom/text-link.atom';

@Component({
  selector: 'app-toolbar-actions',
  standalone: true,
  imports: [TextLinkAtom],
  templateUrl: './toolbar-actions.html',
  styleUrls: ['./toolbar-actions.css'],
})
export class ToolbarActionsMolecule {}
