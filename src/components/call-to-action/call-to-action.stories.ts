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
      image-path="https://images.unsplash.com/photo-1516528387618-afa90b13e000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    </call-to-action>
`;
