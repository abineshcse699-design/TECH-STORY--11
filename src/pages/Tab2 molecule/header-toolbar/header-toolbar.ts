import { Component, Input } from '@angular/core';
import { TabsGroupMolecule } from '../../Tab2 molecule/tabs-group/tabs-group';
import { ToolbarActionsMolecule } from '../../Tab2 molecule/toolbar-actions/toolbar-actions';

@Component({
  selector: 'app-header-toolbar',
  standalone: true,
  imports: [TabsGroupMolecule, ToolbarActionsMolecule],
  templateUrl: './header-toolbar.html',
  styleUrls: ['./header-toolbar.css'],
})
export class HeaderToolbarMolecule {
  @Input() activeTab: 'inProgress' | 'submitted' = 'inProgress';
}
