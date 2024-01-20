import { LitElement, html } from 'lit';
import './styles.css';
import './widget/footer.js';
import './layout/welcome/start.js';
import './layout/welcome/online.js';
import './layout/welcome/thanks.js';
import './widget/welcome/listonline.js';
import './widget/head.js';
import './widget/nav.js';

class Online extends LitElement {
  render() {
    return html`
    <head-start></head-start>
    <head-nav></head-nav>
    <welcome-online></welcome-online>
    <thank-you></thank-you>
    <footer-copy></footer-copy>
    `;
  }
}
customElements.define('mesinkasir-online', Online);
