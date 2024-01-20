import { LitElement, css, html } from 'lit';

export class On extends LitElement {
  static styles = css`
  li {
    list-style:none;
    background-image:none;
}
`;

  static properties = {
    list: {},
    condition: {},
  };

  constructor() {
    super();
    (this.text = '🥇 Spesifikasi dan fitur 🥇'),
      (this.list = [
        'Mesin kasir restoran lengkap',
        'Remote software desktop',
        'Aplikasi restoran online cloud base',
        'Domain nama website restoran',
        'Restoran website cms',
        'Qr Code Menu digital',
        'Reservasi online',
        'Online order',
        'Whatsapp order',
        'Kitchen display screen',
        'Android App backend',
        'Android App frontend',
        'Layanan biaya pertahun',
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
customElements.define('list-cloud', On);
