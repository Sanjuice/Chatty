import { LitElement, html } from "lit-element";
import { connect } from "pwa-helpers";
import { store } from "../redux/store.js";

class Join extends connect(store)(LitElement) {
  static get properties() {
    return {
      rooms: { type: Array },
      userName: { type: String },
      room: { type: String }
    };
  }

  constructor() {
    super();
    this.todos = [];
    this.userName = "";
  }

  stateChanged(state) {
    this.rooms = state.rooms;
    this.userName = state.currUser;
  }

  render() {
    return html` <p>Join view</p>
    <label>Username</label>
    <input type="text" .value="${this.userName}"/>
    <label>Room</label>
    <input type="text" .value="${this.room}"/> `;
  }
}

customElements.define("join-view", Join);
