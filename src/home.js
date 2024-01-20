import { LitElement, html } from 'lit';
import './styles.css';
import './widget/home/intro.js';
import './layout/home/welcome.js';
import './widget/home/button.js';

class Home extends LitElement {
  render() {
    return html`
    <intro-home></intro-home>
    <welcome-home></welcome-home>
    <home-btn></home-btn>
    `;
  }
}
customElements.define('my-home', Home);
