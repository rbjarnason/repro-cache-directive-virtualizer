import { LitElement, html, css, property } from "lit-element";
import { cache } from "lit-html/directives/cache.js";
import "lit-virtualizer";
import { Layout1d } from "lit-virtualizer";
import "@material/mwc-button";

export class ReproCacheDirectiveVirtualizer extends LitElement {
  @property({ type: Boolean }) listOneActive = true;

  @property({ type: Array })
  itemsOne: Array<string> | undefined;

  @property({ type: Array })
  itemsTwo: Array<string> | undefined;

  renderItem(item: any) {
    return html`
      <div>
        <mwc-button .label="${item}"></mwc-button>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.itemsOne = [
        "1111",
        "2222",
        "3333",
        "4444",
        "5555",
        "6666",
        "7777",
        "8888",
        "9999",
        "1111",
        "2222",
        "3333",
        "4444",
        "5555",
        "6666",
        "7777",
        "8888",
        "9999",
        "1111",
        "2222",
        "3333",
        "4444",
        "5555",
        "6666",
        "7777",
        "8888",
        "9999",
      ];
    }, 100);

    setTimeout(() => {
      this.itemsTwo = [
        "AAAA",
        "BBBB",
        "CCCC",
        "DDDD",
        "EEEE",
        "FFFF",
        "GGGG",
        "HHH",
        "IIII",
        "AAAA",
        "BBBB",
        "CCCC",
        "DDDD",
        "EEEE",
        "FFFF",
        "GGGG",
        "HHH",
        "IIII",
        "AAAA",
        "BBBB",
        "CCCC",
        "DDDD",
        "EEEE",
        "FFFF",
        "GGGG",
        "HHH",
        "IIII",
        "AAAA",
        "BBBB",
        "CCCC",
        "DDDD",
        "EEEE",
        "FFFF",
        "GGGG",
        "HHH",
        "IIII",
      ];
    }, 200);
  }

  renderPage() {
    let pageHtml;
    switch (this.listOneActive) {
      case true:
        pageHtml = cache(html`
          <lit-virtualizer
            .items="${this.itemsOne}"
            .layout="${Layout1d}"
            .scrollTarget="${window}"
            .renderItem="${this.renderItem.bind(this)}"
          >
          </lit-virtualizer>
        `);
        break;
      case false:
        pageHtml = cache(html`
          <lit-virtualizer
            .items="${this.itemsTwo}"
            .layout="${Layout1d}"
            .scrollTarget="${window}"
            .renderItem="${this.renderItem.bind(this)}"
          >
          </lit-virtualizer>
        `);
        break;
    }

    return pageHtml;
  }

  render() {
    return html`
      <main>
        <div>
          <button
            @click="${() => {
              this.listOneActive = !this.listOneActive;
            }}"
          >
            Toggle lists
          </button>
        </div>
        <div>${this.renderPage()}</div>
      </main>
    `;
  }
}
