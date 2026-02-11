import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { DeleteIconComponent } from '../../pages/Card3 Atom/delete-icon.component/delete-icon.component';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<DeleteIconComponent> = {
  title: 'Atoms/Delete Icon',
  component: DeleteIconComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, DeleteIconComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Delete icon used for row removal actions.

### Usage
\`\`\`html
<app-delete-icon></app-delete-icon>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DeleteIconComponent>;

export const Default: Story = {};
