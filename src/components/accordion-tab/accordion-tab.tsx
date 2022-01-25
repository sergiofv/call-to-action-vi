import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'accordion-tab',
  styleUrl: 'accordion-tab.scss',
  shadow: true,
})
export class AccordionTab {
  @Prop() title: string;

  @Prop() content: string;

  render() {
    return (
      <div>
        <details>
          <summary>{this.title}</summary>
          <p>{this.content}</p>
        </details>
      </div>
    );
  }
}
