import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'call-to-action',
  styleUrl: 'call-to-action.scss',
  shadow: true,
})
export class CallButton {
  @Prop() headline: string;
  @Prop() titleText: string;
  @Prop() text: string;
  @Prop() buttonText: string;
  @Prop() appearance: string;
  @Prop() imagePath: string;
  @Prop() footerText: string;
  @State() toggled: boolean;

  handleClose() {
    this.toggled = false;
  }

  handleContactUsClick() {
    this.toggled = !this.toggled;
  }

  public render(): JSX.Element {
    let contact = null;

    if (this.toggled) {
      contact = (
        <div class="contact">
          <span class="arrow"></span>
          <div class="flx">
            <button onClick={() => this.handleClose()}>x</button>
            <h3>{this.footerText}</h3>
          </div>
        </div>
      );
    }

    return (
      <div class="component flx">
        <div class="headline">
          <h1>{this.headline}</h1>
        </div>
        <div class="banner flx">
          <div class="flx half">
            <div class="info">
              <h3>{this.titleText}</h3>
              <p>{this.text}</p>
              <button onClick={() => this.handleContactUsClick()} class={`btn flx ${this.appearance}`} type="button">
                {this.buttonText}
              </button>
            </div>
          </div>

          <div class="half">{<img src={this.imagePath} />}</div>
        </div>
        <div class="footer">{this.toggled ? contact : null}</div>
      </div>
    );
  }
}