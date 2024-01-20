import { html, css, LitElement } from 'lit';
export class homeBtn extends LitElement {
  static styles = css`
  .button {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color:white;
    border-radius: 20px;
    text-decoration: none;
    padding: 20px;
    left: 50%;
    text-align: center;
    item-align: center;
    font-size: 20px;
    bottom: 0px;
  }
  p {
    text-align: center;
    padding-bottom: 55px; }
`;

  static properties = {
    start: { type: String },
    link: { type: String },
  };

  constructor() {
    super();
    (this.start = 'Get Start Now'), (this.link = '/welcome');
  }

  render() {
    return html`
    <p><a href="${this.link}" class="button">${this.start}</a></p>
    `;
  }
}
customElements.define('home-btn', homeBtn);
