import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';
import { Join } from './views/join.js';
import { connect } from 'https://unpkg.com/browse/lit-redux-router@0.11.4/';
import { store } from 'https://unpkg.com/browse/redux@4.0.5/';

export class Router extends connect(store)(LitElement) {

      static get properties() {
        return {
          count: {type: Number},
          page: { type: String }
        }
      }

      constructor(){
          super();
          this.page = "join";
      }

      stateChanged(state) {
        this.page = state.page;
      }

      static get styles() {
        return css`.mood { color: green; }`;
      }

      render() {
         switch (this.page) {
          case "join":
            return html`<app-join></app-join>`;
          case "join":
            return html`<app-join></app-join>`;
        
          default:
            break;
        }
      }

      counter(e) {
          this.count = this.count +1;
      }

      getPage() {
        
      }


    }

    customElements.define('router-outlet', Router);