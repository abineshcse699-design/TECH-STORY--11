import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ActionMenuComponent } from '../../pages/components/molecules/action-menu.component';

const meta: Meta<ActionMenuComponent> = {
  title: 'Molecules/Action Menu',
  component: ActionMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [ActionMenuComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable three-dot action menu component built using Angular Material.

## Usage

\`\`\`typescript
<app-action-menu
  (view)="onView()"
  (edit)="onEdit()"
  (delete)="onDelete()">
</app-action-menu>
\`\`\`

### Features
- Uses Angular Material Menu
- Emits view, edit, delete events
- Compact table-friendly design
- Icon-based trigger button
        `,
      },
    },
  },
  argTypes: {
    view: {
      action: 'View clicked',
      description: 'Emits when View is selected',
    },
    edit: {
      action: 'Edit clicked',
      description: 'Emits when Edit is selected',
    },
    delete: {
      action: 'Delete clicked',
      description: 'Emits when Delete is selected',
    },
  },
};

export default meta;
type Story = StoryObj<ActionMenuComponent>;

export const Default: Story = {};

export const InTableRow: Story = {
  render: () => ({
    template: `
      <table style="width:100%; border-collapse:collapse; background:white;">
        <tr style="border-bottom:1px solid #eee;">
          <td style="padding:12px;">Rosa hybrida</td>
          <td style="padding:12px; text-align:right;">
            <app-action-menu
              (view)="view($event)"
              (edit)="edit($event)"
              (delete)="delete($event)">
            </app-action-menu>
          </td>
        </tr>
      </table>
    `,
  }),
};

export const Centered: Story = {
  render: () => ({
    template: `
      <div style="display:flex; justify-content:center; padding:40px; background:#f5f5f5;">
        <app-action-menu
          (view)="view($event)"
          (edit)="edit($event)"
          (delete)="delete($event)">
        </app-action-menu>
      </div>
    `,
  }),
};

export const MultipleRows: Story = {
  render: () => ({
    template: `
      <div style="display:flex; flex-direction:column; gap:12px; background:#fafafa; padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; background:white; padding:12px; border-radius:6px;">
          <span>Rosa hybrida</span>
          <app-action-menu
            (view)="view($event)"
            (edit)="edit($event)"
            (delete)="delete($event)">
          </app-action-menu>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; background:white; padding:12px; border-radius:6px;">
          <span>Tulipa gesneriana</span>
          <app-action-menu
            (view)="view($event)"
            (edit)="edit($event)"
            (delete)="delete($event)">
          </app-action-menu>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; background:white; padding:12px; border-radius:6px;">
          <span>Malus domestica</span>
          <app-action-menu
            (view)="view($event)"
            (edit)="edit($event)"
            (delete)="delete($event)">
          </app-action-menu>
        </div>
      </div>
    `,
  }),
};
