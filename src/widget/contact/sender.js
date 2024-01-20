import { html, css, LitElement } from 'lit';
export class Mail extends LitElement {
  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
    this.title = '💬 Leave your message ';
    this.mail = 'axcora@gmail.com ';
  }

  static styles = css`
  p {margin-top: 10px;}
  textarea,input,select {
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  button {
    padding: 10px;
    margin-bottom: 10px;
  }
  button:hover {
    padding: 10px;
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color: white;
    border-style: solid;
    border-color: whitesmoke;
    transition: 0.3s;
  }
  .spacer{
    border-bottom: solid;
    margin-top: 15px;}
  a {
    color: white;
    text-decoration: none;
  }
`;

  render() {
    return html`
    <p>${this.title}</p>
    <form action="https://airform.io/${this.mail}" method="post">
    <input type="text" name="name" placeholder="Your Compay / Name 🧑🏻" required>
  <input type="text" name="phone" placeholder="Your Phone / Whatsapp 📱" required">
  <input type="email" name="email" placeholder="Your Email 💌 " required">
  <select class="form-select" aria-label="Services">
  <option selected>Select Services 🚀</option>
  <option value="Develop Website">Develop A Website</option>
  <option value="Themes">Themes Template</option>
  <option value="Others">Others</option>
</select>
<input type="text" name="title" placeholder="Title / Subject ✒️ " required">
  <textarea rows="5" name="message" placeholder="Your Message ✍️"></textarea>
  <button>👉 Sent Message </button>
</form>
<div class="spacer"/>
    `;
  }
}
customElements.define('sent-email', Mail);
