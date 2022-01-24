// eslint-disable-next-line object-curly-newline
import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'call-to-action',
  styleUrl: 'call-to-action.scss',
  shadow: true,
})
export class CallButton {
  @Prop() headline: string;

  @Prop() titleText: string;

  @Prop() mainText: string;

  @Prop() buttonOne: string;

  @Prop() buttonTwo: string;

  @Prop() imagePath: string;

  @Prop() footerOneText: string;

  @Prop() footerTwoText: string;

  @State() footerOneToggled: boolean;

  @State() footerTwoToggled: boolean;

  handleClose() {
    this.footerOneToggled = false;
    this.footerTwoToggled = false;
  }

  handleFooterOne() {
    this.footerOneToggled = !this.footerOneToggled;
    this.footerTwoToggled = false;
  }

  handleFooterTwo() {
    this.footerTwoToggled = !this.footerTwoToggled;
    this.footerOneToggled = false;
  }

  public render(): JSX.Element {
    const footerItems = [
      {
        classname: 'footer-one',
        text: this.footerOneText,
      },
      {
        classname: 'footer-two',
        text: this.footerTwoText,
      },
    ];

    const renderFooter = (classname, text) => (
      <div class={classname}>
        <span class='arrow'></span>
        <div class='flx'>
          <button onClick={() => this.handleClose()}>X</button>
          <h3>{text}</h3>
        </div>
      </div>
    );

    return (
      <div class='component flx'>
        <div class='headline'>
          <h1>{this.headline}</h1>
        </div>
        <div class='banner flx'>
          <div class='banner__half flx'>
            <div class='banner__info'>
              <h3 class='banner__title'>{this.titleText}</h3>
              <p>{this.mainText}</p>
              <div class='flx'>
                <button
                  onClick={() => this.handleFooterOne()}
                  class='btn flx'
                  type='button'
                >
                  {this.buttonOne}
                </button>
                <button
                  onClick={() => this.handleFooterTwo()}
                  class='btn2 flx'
                  type='button'
                >
                  {this.buttonTwo}
                </button>
              </div>
            </div>
          </div>
          <div class='banner__half'>{<img src={this.imagePath} />}</div>
        </div>
        <div>
          {this.footerOneToggled
            ? renderFooter(footerItems[0].classname, footerItems[0].text)
            : null}
        </div>
        <div>
          {this.footerTwoToggled
            ? renderFooter(footerItems[1].classname, footerItems[1].text)
            : null}
        </div>
      </div>
    );
  }
}
