import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ActionButtonsComponent } from '../../pages/components/molecules/action-buttons.component';

const meta: Meta<ActionButtonsComponent> = {
  title: 'Molecules/Action Buttons',
  component: ActionButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [ActionButtonsComponent],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A reusable action buttons component that provides common table/page actions.

## Usage

\`\`\`typescript
import { ActionButtonsComponent } from 'your-path';

@Component({
  standalone: true,
  imports: [ActionButtonsComponent],
  template: \`
    <app-action-buttons
      (filterClick)="onFilter()"
      (columnClick)="onColumns()">
    </app-action-buttons>
  \`
})
export class MyComponent {}
\`\`\`

### Features
- Emits filterClick event
- Emits columnClick event
- Uses reusable ButtonComponent
- Designed for table/toolbars
        `,
      },
    },
  },
  argTypes: {
    filterClick: {
      action: 'filter clicked',
      description: 'Emits when filter button is clicked',
    },
    columnClick: {
      action: 'columns clicked',
      description: 'Emits when columns button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ActionButtonsComponent>;

export const Default: Story = {};

export const InToolbar: Story = {
  render: () => ({
    template: `
      <div style="display:flex; justify-content: space-between; align-items:center; padding:16px; background:white; border-radius:8px;">
        <h3 style="margin:0;">Species Management</h3>
        <app-action-buttons
          (filterClick)="filterClick($event)"
          (columnClick)="columnClick($event)">
        </app-action-buttons>
      </div>
    `,
  }),
};

export const InTableHeader: Story = {
  render: () => ({
    template: `
      <div style="padding:16px; background:#f5f5f5; border-radius:8px;">
        <div style="display:flex; justify-content: space-between; align-items:center; margin-bottom:16px;">
          <div>
            <h2 style="margin:0;">Plant Records</h2>
            <p style="margin:4px 0 0 0; color:#666; font-size:14px;">
              Manage and review botanical data
            </p>
          </div>

          <app-action-buttons
            (filterClick)="filterClick($event)"
            (columnClick)="columnClick($event)">
          </app-action-buttons>
        </div>

        <div style="height:120px; background:white; border-radius:4px; display:flex; align-items:center; justify-content:center; color:#999;">
          Table content preview
        </div>
      </div>
    `,
  }),
};

export const CenterAligned: Story = {
  render: () => ({
    template: `
      <div style="display:flex; justify-content:center; padding:40px; background:white;">
        <app-action-buttons
          (filterClick)="filterClick($event)"
          (columnClick)="columnClick($event)">
        </app-action-buttons>
      </div>
    `,
  }),
};

export const WithBackgroundCard: Story = {
  render: () => ({
    template: `
      <div style="padding:24px; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="margin:0;">Dashboard Actions</h3>
          <app-action-buttons
            (filterClick)="filterClick($event)"
            (columnClick)="columnClick($event)">
          </app-action-buttons>
        </div>
      </div>
    `,
  }),
};

export const InDarkMode: Story = {
  render: () => ({
    template: `
      <div style="background:#1e1e1e; padding:24px; border-radius:8px; color:white;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="margin:0;">Dark Theme Example</h3>
          <app-action-buttons
            (filterClick)="filterClick($event)"
            (columnClick)="columnClick($event)">
          </app-action-buttons>
        </div>
      </div>
    `,
  }),
};

export const WithBorderBottom: Story = {
  render: () => ({
    template: `
      <div style="padding:16px; border-bottom:1px solid #e0e0e0;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="margin:0;">Records</h4>
          <app-action-buttons
            (filterClick)="filterClick($event)"
            (columnClick)="columnClick($event)">
          </app-action-buttons>
        </div>
      </div>
    `,
  }),
};
