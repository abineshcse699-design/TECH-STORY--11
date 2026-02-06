import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TableCellComponent } from '../../pages/components/Atoms/table-cell.component/table-cell.component';

const meta: Meta<TableCellComponent> = {
  title: 'Atoms/Table Cell',
  component: TableCellComponent,
  decorators: [
    moduleMetadata({
      imports: [TableCellComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
    },
    isLink: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TableCellComponent>;

export const TextCell: Story = {
  args: {
    value: 'Solanum lycopersicum L.',
    isLink: false,
  },
};

export const LinkCell: Story = {
  args: {
    value: 'XU_30202600000002',
    isLink: true,
  },
};

export const InTable: Story = {
  render: () => ({
    template: `
      <table style="width:100%; border-collapse: collapse;">
        <tr>
          <td style="padding:12px;">
            <app-table-cell value="Rosa hybrida"></app-table-cell>
          </td>
          <td style="padding:12px;">
            <app-table-cell value="XU_30202600000002" [isLink]="true"></app-table-cell>
          </td>
        </tr>
      </table>
    `,
  }),
};
