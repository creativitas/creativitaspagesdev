import { LitElement, html } from 'lit';
import './styles.css';
import './widget/footer.js';
import './layout/welcome/start.js';
import './layout/welcome/offline.js';
import './layout/welcome/online.js';
import './layout/welcome/thanks.js';
import './widget/welcome/listoffline.js';
import './widget/welcome/listonline.js';
import './widget/head.js';
import './widget/nav.js';

class Welcome extends LitElement {
  render() {
    return html`
    <head-start></head-start>
    <head-nav></head-nav>
    <welcome-start></welcome-start>
    <thank-you></thank-you>
    <footer-copy></footer-copy>
    `;
  }
}
customElements.define('welcome-home', Welcome);
