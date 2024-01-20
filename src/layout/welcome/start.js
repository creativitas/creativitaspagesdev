import { html, css, LitElement } from 'lit';
import '../../widget/welcome/listpos.js';
export class Start extends LitElement {
  static styles = css`
  .head {
    padding-top: 20px;
    border-top: solid;
  }
  a {
    padding : 5px;
    color: white;
    text-decoration: none;
    border-bottom: solid;
  }
  img {
    width: 100%;
    border-radius: 20px;
  }
  a:hover {
    background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 33, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    padding:5px;
    color: white;
    border-bottom: solid;
    border-color: whitesmoke;
    transition: 0.3s;
  }
`;

  static properties = {
    title: { type: String },
    description: { type: String },
    url: { type: String },
  };

  constructor() {
    super();
    (this.url = '/welcome.html'),
      (this.title = 'Website Developer Services 👩‍🚀'),
      (this.description =
        '👋 Welcome to the creativitas page, We are website developers who are experienced in developing and building modern website projects, such as Company Profiles, Podcasts, Gallery Images, Documentation, Blogs, Spa Salons, Restaurants, Barbershops, Schools and Custom Websites with SEO and a touch excellent performance in Google Lighthouse.'),
      (this.content =
        'Updates from the Google algorithm, in addition to Google quality article content also prioritize websites with the best performance and speed to enter the main page. Building a site with perfect performance is very difficult because of course we put a lot of thought into the structure of the theme itself, and removing burdensome scripts and images, in order to achieve perfect results in Google Lighthouse.'),
      (this.text =
        'For this reason, the choice of technology in developing a website also has an influence, as now many are switching to using static site generators, or using headless and flatfile CMS. The main goal is speed ,because it works without a database, so it performs faster. This is the reason why many web developers and users are switching to using this technology.'),
      (this.support =
        'And we provide services, 🛸 creating and developing website projects, cloud point of sale applications, modern blogs, documentation website, optimizing website for improve performance and speed, and providing website themes with various technologies to help your project 👍 . All our services is inlcude with ⚙️ help and support from starting hosting setup, push source code into your github repo, and deploying on your hosting, until your website is live 🚀 '),
      (this.cover =
        'https://res.cloudinary.com/dp1ndwq6a/image/upload/c_thumb,w_auto/q_auto/f_avif/v1705673842/creativitas-netlify/services/photographer_gallery_website_image_ywexgk.webp'),
      (this.url = '/welcome/');
  }

  render() {
    return html`
    <div class="head"><h3><a href=${this.url}>${this.title}</a></h3><p>${this.description}</p>
    <img src=${this.cover} data-src=${this.cover} data-srcset=${this.cover} alt=${this.title} width="100%" height="100%"/>
    <p>${this.content}</p><p>${this.text}</p>
    <list-pos></list-pos><p>${this.support}</p></div>
    `;
  }
}
customElements.define('welcome-start', Start);
