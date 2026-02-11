import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Card3 } from '../app/pages 1/card3/card3';

const meta: Meta<Card3> = {
  title: 'Components/Card3',
  component: Card3,
  decorators: [
    moduleMetadata({
      imports: [Card3],
    }),
    applicationConfig({
      providers: [],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Card3 is a structured characteristic table component.

It displays:
- Drag column
- ID column
- English (type + method)
- Varieties
- Notes
- Expandable detail rows

### Usage

\`\`\`html
<app-card3></app-card3>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Card3>;
export const Default: Story = {};

export const Empty: Story = {
  render: () => ({
    props: {
      displayedColumns: ['drag', 'id', 'english', 'varieties', 'notes', 'delete'],
      dataSource: [],
    },
    template: `<app-card3></app-card3>`,
  }),
};

export const SingleRow: Story = {
  render: () => ({
    props: {
      dataSource: [
        {
          id: '1',
          star: true,
          type: 'QL',
          method: 'VG',
          title: 'Tree: type',
          details: [
            { label: 'columnar', variety: 'Wijcik', note: '1' }
          ]
        }
      ]
    },
    template: `<app-card3></app-card3>`,
  }),
};

export const NarrowContainer: Story = {
  render: () => ({
    template: `
      <div style="max-width: 600px; border: 1px dashed #ccc; padding: 16px;">
        <app-card3></app-card3>
      </div>
    `,
  }),
};

export const WithPageBackground: Story = {
  render: () => ({
    template: `
      <div style="background:#f4f3ef; padding:40px; min-height:100vh;">
        <app-card3></app-card3>
      </div>
    `,
  }),
};


export const ManyRows: Story = {
  render: () => ({
    props: {
      dataSource: Array.from({ length: 15 }).map((_, i) => ({
        id: String(i + 1),
        star: i % 2 === 0,
        type: 'QN',
        method: 'MG/VG',
        title: `Characteristic ${i + 1}`,
        details: [
          { label: 'medium', variety: 'Example A', note: '5' },
          { label: 'strong', variety: 'Example B', note: '7' }
        ]
      }))
    },
    template: `<app-card3></app-card3>`,
  }),
};
