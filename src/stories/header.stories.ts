import { Meta, StoryObj } from '@storybook/angular';
import { Header } from '../pages/header/header';

const meta: Meta<Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<Header>;

// --------------------------------------------------
// 1️⃣ BASIC – only header, no navigation
// --------------------------------------------------
export const Basic: Story = {
  name: 'Basic Header',
  args: {
    lang: 'en'
  }
};


// --------------------------------------------------
// 2️⃣ WITH BREADCRUMB
// --------------------------------------------------
export const WithBreadcrumb: Story = {
  name: 'With Breadcrumb',
  args: {
    lang: 'en',
    breadcrumbLevel: '2',
    breadcrumbText: 'Search Results',
    breadcrumbLink: '/search'
  }
};

 // --------------------------------------------------
 // 3️⃣ MULTILINGUAL EXAMPLES
 // --------------------------------------------------
export const FrenchHeader: Story = {
  name: 'French Header',
  args: {
    lang: 'fr',
    breadcrumbLevel: '2',
    breadcrumbText: 'Résultats de recherche',
    breadcrumbLink: '/search'
  }
};

export const GermanHeader: Story = {
  name: 'German Header',
  args: {
    lang: 'de',
    breadcrumbLevel: '3',
    breadcrumbText: 'Behördendetails',
    breadcrumbLink: '/authority/123'
  }
};


