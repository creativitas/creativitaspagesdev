import { html, css, LitElement } from 'lit';
import { data } from '/src/widget/data/nav.js';
export class Navigation extends LitElement {
  static styles = css`
 
nav a:link,
 a:link {
  display: float;
  padding: 8px;
  margin-right: 15px;
  text-decoration: none;
  border-style: solid;
  border-color: white;
  color: whitesmoke;
  font-weight: bold;
}
nav a:hover,nav a:visited{
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 33, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  border-style: solid;
  border-color: whitesmoke;
  transition: 0.3s;
}
nav {
  margin-top: 20px;
  margin-bottom: 30px;
}
`;

  static properties = {
    description: { type: String },
    url: { type: String },
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = data;
    (this.description =
      'Creativitas a modern website developer and website themes template'),
      (this.url = '/start.html');
  }

  render() {
    return html`
    <nav>
    ${this.data.map(
      (item) => html`
    <a href="${item.link}" title="${item.title}" class="nav-link">${item.nav}</a>
    </nav>
    `
    )} `;
  }
}
customElements.define('head-nav', Navigation);
