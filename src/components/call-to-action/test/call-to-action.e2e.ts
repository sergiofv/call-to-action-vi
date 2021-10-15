import { newE2EPage } from '@stencil/core/testing';

describe('call-to-action', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<call-to-action></call-to-action>');

    const element = await page.find('call-to-action');
    expect(element).toHaveClass('hydrated');
  });
});
