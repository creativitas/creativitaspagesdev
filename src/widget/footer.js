import { html, css, LitElement } from 'lit';
export class Footer extends LitElement {
  static styles = css`
  footer {
    text-align: center;
    font-size: 12px;
    color: white;
    padding-bottom: 3px;
  }
  a {
    color: white;
    text-decoration: none;
  }
`;

  static properties = {
    built: { type: String },
    vite: { type: String },
    feat: { type: String },
    lit: { type: String },
    viteurl: { type: String },
    liturl: { type: String },
    power: { type: String },
    firebase: { type: String },
    firebaseurl: { type: String },
    repo: { type: String },
    github: { type: String },
    giturl: { type: String },
    live: { type: String },
    ide: { type: String },
    ideurl: { type: String },
    dev: { type: String },
    developer: { type: String },
    devurl: { type: String },
  };

  constructor() {
    super();
    (this.built = 'built with'),
      (this.vite = '🚀 vite'),
      (this.feat = 'feat'),
      (this.lit = '🛰️ lit'),
      (this.power = 'powered by'),
      (this.firebase = '🪐 cloudflare'),
      (this.live = 'live codding on'),
      (this.ide = '⚡ stackblitz'),
      (this.repo = 'repo on'),
      (this.github = '🌟 github'),
      (this.dev = 'Develope by'),
      (this.developer = '👩‍🚀 creativitas'),
      (this.firebaseurl = 'https://cloudflare.com/'),
      (this.ideurl = 'https://stackblitz.com/'),
      (this.giturl = 'https://github.com/creativitas/creativitaspagesdev'),
      (this.viteurl = 'https://vitejs.dev/'),
      (this.liturl = 'https://lit.dev/'),
      (this.devurl =
        'https://www.fiverr.com/creativitas/design-your-modern-website-using-jekyll');
  }

  render() {
    return html`
    <footer>
    <p>${this.built} <a href="${this.viteurl}">${this.vite}</a> ${this.feat} <a href="${this.liturl}">${this.lit}</a> ${this.power} <a href="${this.firebaseurl}">${this.firebase}</a><br/> ${this.live} <a href="${this.ideurl}">${this.ide}</a> ${this.repo} <a href="${this.giturl}">${this.github}</a><br/> ${this.dev} <a href="${this.devurl}">${this.developer}</a></p>
</footer>
    `;
  }
}
customElements.define('footer-copy', Footer);
