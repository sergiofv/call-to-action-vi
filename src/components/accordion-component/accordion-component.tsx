import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
  @Prop() title: string;

  @Prop() content: string;

  // currently this is only an accordion tab
  // CREATE A COMPLETE ACCORDEON WITH NUMBER OF TABS DINAMICALLY ADDED (map may be??? -- for)

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
