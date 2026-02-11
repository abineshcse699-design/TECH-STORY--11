import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DragIconComponent } from '../../pages/Card3 Atom/drag-icon.component/drag-icon.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<DragIconComponent> = {
  title: 'Atoms/Drag Icon',
  component: DragIconComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, DragIconComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Drag icon used in table rows for reorder functionality.

### Usage
\`\`\`html
<app-drag-icon></app-drag-icon>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DragIconComponent>;

export const Default: Story = {};
