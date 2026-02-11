import { Component, Input } from '@angular/core';
import { MoreDetailsLinkComponent } from '../../panel atom/more-details-link.component/more-details-link.component';
import { MetaTextComponent } from '../../panel atom/meta-text.component/meta-text.component';

@Component({
  selector: 'upov-bottom-row',
  standalone: true,
  imports: [MoreDetailsLinkComponent, MetaTextComponent],
  templateUrl: './bottom-row.component.html',
  styleUrls: ['./bottom-row.component.css'],
})
export class BottomRowComponent {
  @Input() expanded = false;
  @Input() tgCode = '';
  @Input() saveDate = '';
}
