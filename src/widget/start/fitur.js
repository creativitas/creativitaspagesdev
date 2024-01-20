import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import {
  animate,
  AnimateController,
  fadeInSlow,
  fadeOut,
} from '@lit-labs/motion';
import { onFrames, data } from '/src/layout/start/fitur.js';
import { styles } from '/src/layout/start/style.js';
export class DataFitur extends LitElement {
  static properties = {
    data: { type: Array },
    detail: { state: true },
  };
  static styles = styles;

  constructor() {
    super();
    this.data = data;
  }

  controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: 750,
        fill: 'both',
      },
      onFrames,
    },
  });

  render() {
    return html`<div class="container">
      <ul class="cards fit scroll">
        ${repeat(
          this.detail ? [] : this.data,
          (i) => i,
          (i, x) => html`<li
              @click=${(e) => this.clickHandler(e, i)}
              ${animate({
                out: fadeOut,
                id: `${i.id}:card`,
                inId: `${i.id}:detail`,
              })}
            >
              <div
                class="card-background fit"
                ${animate({
                  in: fadeInSlow,
                  skipInitial: true,
                })}
              ></div>
             
            
              <div class="card-header hero-text">
                <div
                  ${animate({
                    id: `${i.id}:card-header`,
                    inId: `${i.id}:detail-header`,
                    skipInitial: true,
                  })}
                >
                  <div class="card-header-title">${i.title} 🎬</div>
                </div>
              </div>
            </li>`
        )}
      </ul>
      ${
        this.detail
          ? html`<div
            class="detail fit"
            @click=${this.clickHandler}
            ${animate({
              id: `${this.detail.id}:detail`,
              inId: `${this.detail.id}:card`,
            })}
          >
            <div class="detail-header">
             
              <div
                class="detail-header-text hero-text"
                ${animate({
                  id: `${this.detail.id}:detail-header`,
                  inId: `${this.detail.id}:card-header`,
                })}
              >
                <div class="detail-header-title"><h3 class="slim">${
                  this.detail.title
                } <a title="${this.detail.description}" href="/start">${
              this.detail.description
            }</a></h3></div>
              </div>
            </div>
            <div
              class="detail-content divider-top"
              ${animate({
                in: fadeInSlow,
              })}
            >
            <div class="video"><iframe src="https://youtube.com/embed/${
              this.detail.video
            }" title=${this.detail.description} loading="lazy"></iframe></div>
            <p>${this.detail.content}</p>
            </div>
          </div>`
          : ''
      }
    </div>`;
  }

  clickHandler(e, item) {
    if (this.controller.isAnimating) {
      this.controller.togglePlay();
    } else {
      this.detail = item;
    }
  }
}
customElements.define('data-fitur', DataFitur);
