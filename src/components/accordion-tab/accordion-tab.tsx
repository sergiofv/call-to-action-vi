import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'accordion-tab',
  styleUrl: 'accordion-tab.scss',
  shadow: true,
})
export class AccordionTab {
  @Prop() tabTitle: string;

  @Prop() content: string;

  render() {
    return (
      <div>
        <details>
          <summary>{this.tabTitle}</summary>
          <p>{this.content}</p>
        </details>
      </div>
    );
  }
}
