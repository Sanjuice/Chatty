import {LitElement, html, css} from 'https://unpkg.com/lit-element/lit-element.js?module';

  export class Join extends LitElement {

      static get properties() {
        return {
          count: {type: Number},
          page: { type: String }
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
        return html`<div class="join-container">
        <header class="join-header">
            <h1> Chatty</h1>
        </header>
        <main class="join-main">
            <form action="chat.html">
                <div class="form-control">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter username..."
                        required
                    />
                </div>
                <div class="form-control">
                    <label for="room">Room</label>
                    <select name="room" id="room">
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                        <option value="C#">C#</option>
                        <option value="Ruby">Ruby</option>
                        <option value="Java">Java</option>
                    </select>
                </div>
                <button type="submit" class="btn">Join Chat</button>
            </form>
        </main>
    </div>
        `;
      }

      counter(e) {
          this.count = this.count +1;
      }

      getPage() {
        switch (this.page) {
          case "join":
            return ``
            
            break;
        
          default:
            break;
        }
      }


    }

    customElements.define('app-join', Join);