import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemAtom } from '../../Tab2 atom/tab-item/tab-item';

@Component({
  selector: 'app-tabs-group',
  standalone: true,
  imports: [CommonModule, TabItemAtom],
  templateUrl: './tabs-group.html',
  styleUrls: ['./tabs-group.css'],
})
export class TabsGroupMolecule {
  @Input() activeTab: 'inProgress' | 'submitted' = 'inProgress';
}
