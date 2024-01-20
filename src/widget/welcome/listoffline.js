import { LitElement, css, html } from 'lit';
import { data } from '/src/widget/data/themes.js';

export class Off extends LitElement {
  static styles = css`
  li {
    list-style:none;
    background-image:none;
}
`;
  static properties = {
    list: {},
    condition: {},
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = data;
    (this.text = '🥇 Spesifikasi dan fitur 🥇'),
      (this.list = [
        'Mesin kasir restoran lengkap',
        'Remote software desktop',
        'Software restoran offline version',
        'Optional waiters tablet order',
        'Optional kitchen display screen',
        'Sekali beli untuk selama nya',
      ]);
    this.condition = true;
  }

  render() {
    return html`
      <p>${this.text}</p>
      <ul>
        ${this.list.map(
          (item) => html`
              <li>✅ ${item}</li>
            `
        )}
      </ul>
    `;
  }
}
customElements.define('list-desktop', Off);
