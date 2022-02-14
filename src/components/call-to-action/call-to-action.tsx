// eslint-disable-next-line object-curly-newline
import { Component, h, Prop, State } from '@stencil/core';

interface Button {
  classname: string;
  whenClicked: () => void;
  text: string;
}

export interface Footer {
  buttonLabel: string;
  buttonClassname: string;
  content: string;
  toggled: boolean;
  classname: string;
}

@Component({
  tag: 'call-to-action',
  styleUrl: 'call-to-action.scss',
  shadow: true,
})
export class CallButton {
  @Prop() headline: string;

  @Prop() titleText: string;

  @Prop() mainText: string;

  @Prop() imagePath: string;

  @Prop({ reflect: true, mutable: true }) footers: Footer[];

  @State() isOpen: boolean | null;

  @State() isIndex: number | 0;

  testFooters = [
    {
      buttonLabel: 'Info',
      buttonClassname: 'btn dark',
      content: 'INFO',
      toggled: true,
      classname: 'footer--dark',
    },
    {
      buttonLabel: 'About',
      buttonClassname: 'btn mid',
      content: 'ABOUT',
      toggled: false,
      classname: 'footer--mid',
    },
    {
      buttonLabel: 'Contact',
      buttonClassname: 'btn light',
      content: 'CONTACT',
      toggled: false,
      classname: 'footer--light',
    },
  ];

  handleClose = () => {
    this.isOpen = false;
  };

  handleFooterToggle(footerIndex) {
    this.isIndex = footerIndex;
    this.isOpen = true;
  }

  public render(): JSX.Element {
    // test
    this.footers = this.testFooters;
    const renderFooter = (footer: Footer | undefined) => {
      if (!footer) {
        return null;
      }
      return (
        <div class={`footer ${footer.classname}`}>
          <span class='arrow'></span>
          <div class='flx'>
            <button onClick={() => this.handleClose()}>X</button>
            <h3>{footer.content}</h3>
          </div>
        </div>
      );
    };

    const buttons: Button[] = this.footers.map((footer, i) => ({
      classname: footer.buttonClassname,
      text: footer.buttonLabel,
      whenClicked: () => this.handleFooterToggle(i),
    }));

    const renderButton = (button: Button): JSX.Element => (
      <button onClick={button.whenClicked} class={button.classname}>
        {button.text}
      </button>
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
              <div class='flx'>{buttons.map(renderButton)}</div>
            </div>
          </div>
          <div class='banner__half'>{<img src={this.imagePath} />}</div>
        </div>
        <div>
          {this.isOpen
            ? renderFooter(this.footers[this.isIndex])
            : renderFooter(null)}
        </div>
      </div>
    );
  }
}
