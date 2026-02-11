import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { HeaderRowComponent } from '../../pages/card2 moleculr/header-row.component/header-row.component';

import { DragIconComponent } from '../../pages/Card3 Atom/drag-icon.component/drag-icon.component';
import { DeleteIconComponent } from '../../pages/Card3 Atom/delete-icon.component/delete-icon.component';
import { StarIndicatorComponent } from '../../pages/Card3 Atom/star-indicator.componen/star-indicator.componen';
import { TypeMethodComponent } from '../../pages/Card3 Atom/type-method.component/type-method.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<HeaderRowComponent> = {
  title: 'Molecules/Characteristic Header Row',
  component: HeaderRowComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        HeaderRowComponent,
        DragIconComponent,
        DeleteIconComponent,
        StarIndicatorComponent,
        TypeMethodComponent,
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    star: { control: 'boolean' },
    type: { control: 'text' },
    method: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
Header row molecule used inside characteristic table.

Combines:
- Drag icon
- ID + star indicator
- Type + Method
- Delete icon
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeaderRowComponent>;

export const Default: Story = {
  args: {
    id: '1',
    star: true,
    type: 'QN',
    method: 'MG/VG',
  },
};

export const WithoutStar: Story = {
  args: {
    id: '2',
    star: false,
    type: 'QL',
    method: 'VG',
  },
};

export const LongValues: Story = {
  args: {
    id: '12',
    star: true,
    type: 'Quantitative',
    method: 'Measurement / Visual Grading',
  },
};
