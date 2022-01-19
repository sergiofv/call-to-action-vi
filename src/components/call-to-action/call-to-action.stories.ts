import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'call-to-action',
  parameters: {
    docs: { description: { component: readme } },
    jest: ['call-to-action.spec.tsx', 'call-to-action.e2e.ts'],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
   <call-to-action  
      headline="Lorem Ipsum" 
      title-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
      main-text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..." 
      button-one="Contact us!"
      button-two="More info..."
      footer-one-text="Contact us at user@mail.com"
      footer-two-text="This is an information text!" 
      image-path="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1121&q=80">
    </call-to-action>
`;
