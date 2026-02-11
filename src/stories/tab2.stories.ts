import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { Tab2 } from '../app/pages 1/tab2/tab2';

const meta: Meta<Tab2> = {
  title: 'Components/Card3-ApplicationsTable',
  component: Tab2,
  decorators: [
    moduleMetadata({
      imports: [Tab2],
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
Applications table component with:

• Tabs (In Progress / Submitted)
• Optional filter row
• Sticky actions column
• Sorting icons
• Progress bar indicator

Used to display application records in dashboard style.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<Tab2>;
export const InProgressDefault: Story = {};

export const WithFiltersVisible: Story = {
  render: () => ({
    template: `
      <app-tab2></app-tab2>
    `,
  }),
};

export const SubmittedTabActive: Story = {
  render: () => ({
    template: `
      <div class="crt-container">
        <div class="header-toolbar">
          <div class="tabs-side">
         
          </div>
        </div>
        <app-tab2></app-tab2>
      </div>
    `,
  }),
};

export const EmptyState: Story = {
  render: () => ({
    props: {
      dataSource: [],
    },
    template: `
      <app-tab2></app-tab2>
    `,
  }),
};

export const ManyRowsScrollable: Story = {
  render: () => ({
    props: {
      dataSource: Array.from({ length: 20 }).map((_, i) => ({
        id: 'XU_' + (30202600000000 + i),
        type: 'PBR',
        modified: '10/12/2024',
        crop: 'Lactuca sativa L.',
        denomination: 'Variety ' + (i + 1),
        reference: 'Ref ' + (i + 1),
      })),
    },
    template: `<app-tab2></app-tab2>`,
  }),
};

export const LongTextContent: Story = {
  render: () => ({
    props: {
      dataSource: [
        {
          id: 'XU_30202600000002',
          type: 'National Listing (Very Long Application Name)',
          modified: '10/12/2024',
          crop: 'Solanum lycopersicum L. var. extremely long botanical classification name example',
          denomination: 'Very Long Proposed Variety Denomination Example Text',
          reference: 'Extremely Long Breeder Reference Example',
        },
      ],
    },
    template: `<app-tab2></app-tab2>`,
  }),
};

export const WithoutProgressBar: Story = {
  render: () => ({
    template: `
      <app-tab2></app-tab2>
      <style>
        .progress-container { display: none; }
      </style>
    `,
  }),
};

export const DashboardLayout: Story = {
  render: () => ({
    template: `
      <div style="background:#f4f6f6; padding:40px; min-height:100vh;">
        <div style="background:white; padding:20px; border-radius:8px;">
          <app-tab2></app-tab2>
        </div>
      </div>
    `,
  }),
};

export const SingleRowOnly: Story = {
  render: () => ({
    props: {
      dataSource: [
        {
          id: 'XU_1',
          type: 'PBR',
          modified: '01/01/2025',
          crop: 'Test crop',
          denomination: 'Test variety',
          reference: 'Test ref',
        },
      ],
    },
    template: `<app-tab2></app-tab2>`,
  }),
};
