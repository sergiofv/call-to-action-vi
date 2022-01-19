import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'accordion-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: ['accordion-component.spec.tsx', 'accordion-component.e2e.ts'],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <accordion-component
    title='Accordion title!'
    content='This is the text that is shown when you click the accordion'  
  ></accordion-component>
`;
