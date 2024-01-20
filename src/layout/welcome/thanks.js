import { html, css, LitElement } from 'lit';
import { data } from '/src/widget/data/nav.js';
export class Thanks extends LitElement {
  static styles = css`
  .thanks {
    padding-bottom: 20px;
  } 
  a {
    padding : 5px;
    color: white;
    text-decoration: none;
    border-bottom: solid;
  }
  a:hover {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    padding:5px;
    color: white;
    border-bottom: solid;
    border-color: whitesmoke;
    transition: 0.3s;
  }
  .thank-you{border: solid 1px white; padding: 18px; border-radius:10px; margin-bottom: 15px;}
`;

  static properties = {
    description: { type: String },
    url: { type: String },
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = data;
    (this.btn = '✨ Hire Developer'),
      (this.btnlink = 'https://fiverr.com/creativitas'),
      (this.text = 'Choose products according to your needs.'),
      (this.btn1 = 'Services 🚀'),
      (this.btn1link = '/websitedeveloper/'),
      (this.btn2 = 'Themes 🎭'),
      (this.btn2link = '/themes/');
    this.pilih = 'Creativitas Website development and theme service solutions.';
  }

  render() {
    return html`
    <div class="thank-you">
    <p><a href="${this.btnlink}">${this.btn}</a> </p>
    <div class="thanks"><p>${this.text}</p>
    <p><a href="${this.btn1link}">${this.btn1}</a> or <a href="${
      this.btn2link
    }">${this.btn2}</a></p>
    <p>${this.pilih}</p>
    <nav>
    ${this.data.map(
      (item) => html`
    <a href="${item.link}" title="${item.title}" class="nav-link">${item.nav}</a>
    </nav>
    `
    )} 
    </div>
    </div>
    `;
  }
}
customElements.define('thank-you', Thanks);
