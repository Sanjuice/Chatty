import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import userEvent from "@testing-library/user-event";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://127.0.0.1:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io.connect(ENDPOINT);

    setName(name);
    console.log(name);
    setRoom(room);

    console.log(socket);

    socket.emit("joinRoom", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("chatMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="chatContainer">
      <section class="hero is-primary is-fullheight">
        <div class="hero-body is-flex is-justify-content-center">
          <div className="container">
            <div className="columns is-1">
              <div className="column is-3">
                {" "}
                <div className="box">
                <h1 class="subtitle has-text-black">Online</h1>
                </div>
              </div>
              <div class="column is-9">
                <div className="box">
                    <div className="box-header is-flex is-flex-direction-row is-justify-content-space-between">
                    <h1 class="title has-text-black">{room}</h1>
                    <a href="/"> <img src="https://img.icons8.com/pastel-glyph/64/000000/cancel--v1.png"/> </a>
                    

                    

                    </div>
                  
                  <hr />
                  <div className="something" style={{height:"500px"}}></div>
                  <div className="inputStuff">
                  <input
                    value={message}
                    className="input"
                    placeholder="Send a message.."
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) =>
                      event.key === "Enter" ? sendMessage(event) : null
                    }
                  />
                  
                  <button className="button" onClick={(event) =>
                       sendMessage(event) 
                    }>
                      Send
                  </button>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container"></div>
    </div>
  );
};

export default Chat;
