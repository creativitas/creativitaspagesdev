import { LitElement, css, html } from 'lit';

export class Pos extends LitElement {
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
    (this.text = '🥇 Fast Web Technology 🥇'),
      (this.list = [
        'Jekyll Ruby On Rails - Work with Markdown .md files and YAML',
        'Eleventy 11ty slim and fast static site generator run on Node JS ',
        'Astro JS New and Popular Jamstack Generation.',
        'Next Js The Leader of Jamstack Website by React Technology',
        'Gatsby Js The Best React Framework',
        'Svelte Kit Fullstack Modern Website with SEO',
        'Angular is an elegant web technology presented by the Google development team ',
        'Blazor WASM web framework by microsoft technology',
        'Pico Flatfile CMS Static Site Generator Alternative works on PHP language',
        'Bludit Flatfile CMS super fast website with SEO plugins',
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
customElements.define('list-pos', Pos);
