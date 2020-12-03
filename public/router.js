import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

    class Router extends LitElement {

      static get properties() {
        return {
          count: {type: Number}
        }
      }

      constructor(){
          super();
          this.count = 0;
      }

      static get styles() {
        return css`.mood { color: green; }`;
      }

      render() {
        return html`<button @click=${(e) => this.counter(e)}> Click me! </button>
        <p> Button has been clicked ${this.count} times.</p>
        `;
      }

      counter(e) {
          this.count = this.count +1;
      }


    }

    customElements.define('router-outlet', Router);