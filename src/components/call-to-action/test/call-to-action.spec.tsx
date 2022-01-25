import { newSpecPage } from '@stencil/core/testing';
import { CallButton } from '../call-to-action';

describe('call-to-action', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CallButton],
      html: '<call-to-action></call-to-action>',
    });
    expect(page.root).toEqualHtml(`
      <call-to-action>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </call-to-action>
    `);
  });
});
