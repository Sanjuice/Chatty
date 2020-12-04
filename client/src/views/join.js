import { LitElement, html } from "lit-element";
import { connect } from "pwa-helpers";
import { store } from "../redux/store.js";
import {io} from 'socket.io-client';

class Join extends connect(store)(LitElement) {
  static get properties() {
    return {
      rooms: { type: Array },
      userName: { type: String },
      room: { type: String },
      socketId: { type: String }
    };
  }

  constructor() {
    super();
    this.todos = [];
    this.userName = "Sanju";
    this.room = "Example";
    let socket = io.connect('http://localhost:8080');
    this.socketId = socket
    console.log(socket);
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
    <input type="text" .value="${this.room}"/> 
    <button @click=""> Submit </button>
    `;
  }

  addUser() {
    store.dispatch(addUser())

  }
}

customElements.define("join-view", Join);
