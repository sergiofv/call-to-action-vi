import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'accordion-tab',
  parameters: {
    docs: { description: { component: readme } },
    jest: ['accordion-tab.spec.tsx', 'accordion-tab.e2e.ts'],
  },
  decorators: [jsxDecorator],
};

export const Tab = (): string => `
  <accordion-tab
    title='Accordion tab 1'
    content='This is the text that is shown when you click the accordion tab'  
  ></accordion-tab>
`;
