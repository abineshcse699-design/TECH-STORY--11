import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { CountryComponent2 } from '../app/cards/upov-country2/upov-country2';

const meta: Meta<CountryComponent2> = {
  title: 'Components/CountryCard2',
  component: CountryComponent2,
  decorators: [
    moduleMetadata({
      imports: [CountryComponent2],
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
Country card component used to display contact information for UPOV members.

## Usage

\`\`\`html
<upov-country2></upov-country2>
\`\`\`

Displays:
- Country name & code
- Flag
- Contact person
- Phone
- Email
- Office
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CountryComponent2>;

export const Default: Story = {};

export const FullWidthOnly: Story = {
  render: () => ({
    component: CountryComponent2,
    props: {
      countryData: [
        {
          name: 'Australia',
          code: 'AU',
          flag: 'https://flagcdn.com/w80/au.png',
          person: 'James Donovan',
          email: 'j.donovan@australia.pvp.com',
          phone: '+61 2 6272 3456',
          office: "Plant Breeder's Rights"
        },
        {
          name: 'Bulgaria',
          code: 'BG',
          flag: 'https://flagcdn.com/w80/bg.png',
          person: '-',
          email: 'bpo@bg.net',
          phone: '+359 2 873 51 75',
          office: 'State Patent Office'
        }
      ]
    }
  })
};

export const singleCard: Story = {
  render: () => ({
    component: CountryComponent2,
    props: {
      countryData: [

        {
          name: 'Australia',
          code: 'AU',
          flag: 'https://flagcdn.com/w80/au.png',
          person: 'James Donovan',
          email: 'j.donovan@australia.pvp.com',
          phone: '+61 2 6272 3456',
          office: "Plant Breeder's Rights",
          half: true
        }
      ]
    }
  })
};


export const ManyCountries: Story = {
  args: {
    countryData: [
      {
        name: 'Australia',
        code: 'AU',
        flag: 'https://flagcdn.com/w80/au.png',
        person: 'James Donovan',
        email: 'j.donovan@australia.pvp.com',
        phone: '+61 2 6272 3456',
        office: "Plant Breeder's Rights"
      },
      {
        name: 'Bulgaria',
        code: 'BG',
        flag: 'https://flagcdn.com/w80/bg.png',
        person: '-',
        email: 'bpo@bg.net',
        phone: '+359 2 873 51 75',
        office: 'State Patent Office'
      },
      {
        name: 'Canada',
        code: 'CA',
        flag: 'https://flagcdn.com/w80/ca.png',
        person: 'Emma Clarke',
        email: 'emma.clarke@canada.gc.ca',
        phone: '+1 613 555 7890',
        office: 'Canadian Food Inspection Agency'
      }
    ]
  }
};

export const NoPerson: Story = {
  args: {
    countryData: [
      {
        name: 'Germany',
        code: 'DE',
        flag: 'https://flagcdn.com/w80/de.png',
        person: '',
        email: 'info@bundessortenamt.de',
        phone: '+49 531 299 0',
        office: 'Federal Plant Variety Office'
      }
    ]
  }
};

export const MissingEmail: Story = {
  args: {
    countryData: [
      {
        name: 'France',
        code: 'FR',
        flag: 'https://flagcdn.com/w80/fr.png',
        person: 'Claire Martin',
        email: '',
        phone: '+33 1 44 00 00 00',
        office: 'Plant Variety Protection Office'
      }
    ]
  }
};




export const MultipleHalfCards: Story = {
  args: {
    countryData: [
      {
        name: 'Australia',
        code: 'AU',
        flag: 'https://flagcdn.com/w80/au.png',
        person: 'James Donovan',
        email: 'j.donovan@australia.pvp.com',
        phone: '+61 2 6272 3456',
        office: "Plant Breeder's Rights",
        half: true
      },
      {
        name: 'Japan',
        code: 'JP',
        flag: 'https://flagcdn.com/w80/jp.png',
        person: 'Takashi Yamamoto',
        email: 't.yamamoto@japan.go.jp',
        phone: '+81 3 3502 8111',
        office: 'Plant Variety Protection Office',
        half: true
      }
    ]
  }
};


export const GridLayout: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 16px; padding: 16px;">
        <upov-country2></upov-country2>
      </div>
    `
  })
};

export const BrokenFlag: Story = {
  args: {
    countryData: [
      {
        name: 'Test Country',
        code: 'TC',
        flag: 'invalid-image.png',
        person: 'Test Person',
        email: 'test@example.com',
        phone: '+00 0000 0000',
        office: 'Test Office'
      }
    ]
  }
};



export const Playground: Story = {
  args: {
    countryData: [
      {
        name: 'Australia',
        code: 'AU',
        flag: 'https://flagcdn.com/w80/au.png',
        person: 'James Donovan',
        email: 'j.donovan@australia.pvp.com',
        phone: '+61 2 6272 3456',
        office: "Plant Breeder's Rights"
      }
    ]
  }
};
