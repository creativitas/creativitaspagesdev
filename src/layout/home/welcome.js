import { LitElement, html } from 'lit';
import { animate, AnimateController, flyBelow, fade } from '@lit-labs/motion';
import { styles } from '/src/layout/home/styles.js';
export class WelcomeHome extends LitElement {
  static properties = {
    letters: { type: Array },
    link: { type: String },
  };
  static styles = styles;

  lit = ['C', 'R', 'E', 'A', 'T', 'I', 'V', 'I', 'T', 'A', 'S'];

  duration = 1000;
  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: 'backwards',
      },
    },
    onComplete: () => this.changeLayout(),
  });
  constructor() {
    super();
    (this.title = 'Modern Website Developer'), (this.link = '/welcome/');
    this.addEventListener('click', () => this.clickHandler());
    this.letters = this.lit;
  }

  render() {
    const delayTime = this.duration / (this.letters.length * 2.5);
    return html`
      ${this.letters?.map(
        (letter, i) => html`<span
            class="letter intro"
            ${animate({
              keyframeOptions: {
                delay: i * delayTime,
              },
              in: fade,
              out: flyBelow,
            })}
            ><a href="${this.link}">${letter}</a></span
          >`
      )}
   `;
  }

  clickHandler() {
    if (this.controller.isAnimating) {
      this.controller.togglePlay();
    } else {
      this.changeLayout();
    }
  }

  changeLayout() {
    this.letters = this.letters.length ? [] : this.lit;
  }
}
customElements.define('welcome-home', WelcomeHome);
