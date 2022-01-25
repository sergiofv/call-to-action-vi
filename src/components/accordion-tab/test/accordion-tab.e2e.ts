import { newE2EPage } from '@stencil/core/testing';

describe('accordion-tab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-tab></accordion-tab>');

    const element = await page.find('accordion-tab');
    expect(element).toHaveClass('hydrated');
  });
});
