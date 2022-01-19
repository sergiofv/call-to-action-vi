import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
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
