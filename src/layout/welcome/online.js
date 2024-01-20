import { html, css, LitElement } from 'lit';
import '../../widget/welcome/listonline.js';
import { data } from '/src/widget/data/themes.js';
export class Cloud extends LitElement {
  static styles = css`
  .head {
    padding-top: 20px;
    border-top: solid;
  }
  img {
    width: 100%;
    border-radius: 20px;
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
`;

  static properties = {
    title: { type: String },
    description: { type: String },
    url: { type: String },
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = data;
    (this.title = 'MESIN KASIR RESTORAN ONLINE 🚀'),
      (this.description =
        'Aplikasi restoran online terintergasi dengan mesin kasir resto cafe rumah makan untuk bekerja.'),
      (this.url = '/themes');
  }

  render() {
    return html`
    <div class="head"><h3><a title=${this.title} href="${this.url}">${
      this.title
    }</a></h3>
    ${this.data.map(
      (item) => html`
      <img src=${item.image} data-src=${item.image} data-srcset=${item.image} alt=${item.title} loading="lazy" width="100%" height="100%"/>
          <h3><strong><a href=${item.url}>${item.title}</a></strong></h3>
          <p>${item.content}</p>
          <p><a href=${item.link}>Order ${item.title}</a></p>
        `
    )}
    </div>
    `;
  }
}
customElements.define('welcome-online', Cloud);
