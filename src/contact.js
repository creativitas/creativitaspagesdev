import { LitElement, html } from 'lit';
import './styles.css';
import './widget/head.js';
import './widget/nav.js';
import './widget/footer.js';
import './layout/contact/callus.js';
import './widget/contact/sender.js';

class Contact extends LitElement {
  render() {
    return html`
    <head-start></head-start>
    <head-nav></head-nav>
    <call-us></call-us>
    <sent-email></sent-email>
    <footer-copy></footer-copy>
    `;
  }
}
customElements.define('contact-us', Contact);
