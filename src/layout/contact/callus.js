import { html, css, LitElement } from 'lit';
export class Call extends LitElement {
  static styles = css`
  .head {
    padding-top:10px;
    border-top: solid;
  }
  a {
    color: white;
    text-decoration: none;
  }
  .contact {
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .button {
    padding: 10px;
    border: solid;
  }
  .button:hover {
    padding: 10px;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
`;

  static properties = {
    title: { type: String },
    description: { type: String },
    was: { type: String },
    wa: { type: String },
    call: { type: String },
    tel: { type: String },
    url: { type: String },
  };

  constructor() {
    super();
    (this.title = 'Contact Creativitas Web Dev'),
      (this.description =
        'If you need help or information , you can contact our team dev.'),
      (this.wa = '📲 Whatsapp'),
      (this.was = 'https://wa.me/62895339403223'),
      (this.call = '📧 Email'),
      (this.tel = 'mailto:axcora@gmail.com'),
      (this.url = '/contact/');
  }

  render() {
    return html`
    <div class="head"><h3><a href="${this.url}">${this.title}</a></h3><p>${this.description}</p><p class="contact"><a class="button" href="${this.was}">${this.wa}</a> <a class="button" href="${this.tel}">${this.call}</a></p></div>
    `;
  }
}
customElements.define('call-us', Call);
