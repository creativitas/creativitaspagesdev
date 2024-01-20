import { html, css, LitElement } from 'lit';
export class Head extends LitElement {
  static styles = css`
  head,h1 {
    text-align: center;
    color: white;
    font-size:20px;
  }
  h2 {
    color: white;
    font-size:14px;}
  a {
    color: white;
    text-decoration: none;
  }

`;

  static properties = {
    title: { type: String },
    description: { type: String },
    url: { type: String },
  };

  constructor() {
    super();
    (this.title = 'Creativitas'),
      (this.description =
        'Jekyll, Eleventy, Astro Js,React Js, Gatsby Js,Next Js, Angular,Svelte , Blazor WASM, Headless and Flatfile CMS Website developer'),
      (this.url = '/welcome/');
  }

  render() {
    return html`
    <head><h1><a href="${this.url}">${this.title}</a></h1><h2>${this.description}</h2></head>
    `;
  }
}
customElements.define('head-start', Head);
