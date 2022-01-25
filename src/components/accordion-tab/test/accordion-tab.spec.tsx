import { newSpecPage } from '@stencil/core/testing';
import { AccordionTab } from '../accordion-tab';

describe('accordion-tab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionTab],
      html: '<accordion-tab></accordion-tab>',
    });
    expect(page.root).toEqualHtml(`
      <accordion-tab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-tab>
    `);
  });
});
