import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from '../../label.component/label.component';
import { ValueTextComponent} from '../../value-text.component/value-text.component';

@Component({
  selector: 'upov-info-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upov-info-group.component.html',
  styleUrls: ['./upov-info-group.component.css']
})
export class UpovInfoGroup {

  @Input() label!: string;
  @Input() value!: string;

}
