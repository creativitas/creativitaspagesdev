import { html, css, LitElement } from 'lit';
export class IntroHome extends LitElement {
  static styles = css`
  h1 {
    text-align: center;
    font-size: 20px;
  }
  a:link,a:hover,a:visited {text-decoration: none;
  
    background: -webkit-linear-gradient(
      0deg,
      rgba(0, 212, 255, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

  static properties = {
    title: { type: String },
    link: { type: String },
  };

  constructor() {
    super();
    (this.title = 'Modern Website Developer'), (this.link = '/welcome.html');
  }

  render() {
    return html`
    <h1><a href="/">${this.title}</a></h1>
    `;
  }
}
customElements.define('intro-home', IntroHome);
