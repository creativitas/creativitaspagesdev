import { LitElement, html } from 'lit';
import './styles.css';
import './widget/footer.js';
import './layout/welcome/offline.js';
import './layout/welcome/thanks.js';
import './widget/head.js';
import './widget/nav.js';

class Offline extends LitElement {
  render() {
    return html`
    <head-start></head-start>
    <head-nav></head-nav>
    <welcome-offline></welcome-offline>
    <thank-you></thank-you>
    <footer-copy></footer-copy>
    `;
  }
}
customElements.define('mesinkasir-offline', Offline);
