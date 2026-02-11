import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DragIconComponent } from '../../Card3 Atom/drag-icon.component/drag-icon.component';
// import { DeleteIconComponent } from '../../Card3 Atom/delete-icon.component/delete-icon.component';
// import { StarIndicatorComponent } from '../../Card3 Atom/star-indicator.componen/star-indicator.componen';
// import { TypeMethodComponent } from '../../Card3 Atom/type-method.component/type-method.component';
import { MatIconModule } from '@angular/material/icon';

@Component({

  selector: 'upov-characteristic-header-row',
  standalone: true,
  imports: [

    CommonModule,
    MatIconModule,
    // DragIconComponent,
    // DeleteIconComponent,
    // StarIndicatorComponent,
    // TypeMethodComponent

  ],

  templateUrl: './header-row.component.html',
  styleUrls: ['./header-row.component.css']

})

export class HeaderRowComponent {

  @Input() id!: string;
  @Input() star!: boolean;
  @Input() type!: string;
  @Input() method!: string;

}
