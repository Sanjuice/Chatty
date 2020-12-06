import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    //here
    <div className="level">
        <div className="level-left">
        </div>
      <div className="level-right">
        <div className="level-item"> </div>
          <div className="notification is-primary">
            <div>
              <p>{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
          <p className="ml-2">{name} </p>
      </div>
    </div>
  ) : (
    //here
    <div className="level">
      <div className="level-left">
        <div className="level-item"> </div>
        <p className="mr-4">{user}</p>
        <div className="notification ml-1">
          <div>
            <p>{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
