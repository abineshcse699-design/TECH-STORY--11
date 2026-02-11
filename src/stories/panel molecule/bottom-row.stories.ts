import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { BottomRowComponent } from '../../pages/panel molecule/bottom-row.component/bottom-row.component';

const meta: Meta<BottomRowComponent> = {
  title: 'Molecules/BottomRow',
  component: BottomRowComponent,
  decorators: [
    moduleMetadata({
      imports: [BottomRowComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    expanded: { control: 'boolean' },
    tgCode: { control: 'text' },
    saveDate: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<BottomRowComponent>;

export const Collapsed: Story = {
  args: {
    expanded: false,
    tgCode: 'TG/export_test_2',
    saveDate: 'Saved: 02 Dec, 2025 - 31 Dec, 2025',
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    tgCode: 'TG/export_test_2',
    saveDate: 'Saved: 02 Dec, 2025 - 31 Dec, 2025',
  },
};

export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width:600px;border:1px solid #eee;">
        <upov-bottom-row
          [expanded]="expanded"
          [tgCode]="tgCode"
          [saveDate]="saveDate">
        </upov-bottom-row>
      </div>
    `,
  }),
};
