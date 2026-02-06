import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablesComponent, TableRow } from './tables.component';

const mockData: TableRow[] = [
  {
    ref: 'XU_30202600000002',
    application: 'PBR',
    modified: '10/12/2024',
    crop: 'Lactuca sativa L.',
    denomination: 'testccc',
    breeder: 'test viet nam'
  },
  {
    ref: 'XU_30202500000155',
    application: 'National Listing (VL)',
    modified: '12/06/2024',
    crop: 'Solanum lycopersicum L.',
    denomination: '',
    breeder: 'TEST DEN'
  }
];

const meta: Meta<TablesComponent> = {
  title: 'Application/Tables',
  component: TablesComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, TablesComponent],
    }),
  ],
  argTypes: {
    activeTab: {
      control: 'radio',
      options: ['progress', 'submitted'],
    },
    showFilters: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TablesComponent>;

export const Default: Story = {
  args: {
    activeTab: 'progress',
    showFilters: true,
    dataSource: mockData,
  },
};

export const SubmittedTab: Story = {
  args: {
    activeTab: 'submitted',
    showFilters: true,
    dataSource: mockData,
  },
};

export const WithoutFilters: Story = {
  args: {
    activeTab: 'progress',
    showFilters: false,
    dataSource: mockData,
  },
};

export const EmptyState: Story = {
  args: {
    activeTab: 'progress',
    showFilters: true,
    dataSource: [],
  },
};
