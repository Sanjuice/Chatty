import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return(
        isSentByCurrentUser
        ? (
            //here
            <div className="container is-flex justify-content-flex-end">
                <div className="notification is-primary ml-6">
                <p>{trimmedName}, </p>
                <div>
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>

                </div>
                

            </div>
        )
        : (
            //here
            <div className="container is-flex ">
                <div className="notification">
                <p>{user}</p>
                <div>
                    <p>{ReactEmoji.emojify(text)}</p>
                </div>

                </div>

            </div>
        )
    )

}

export default Message;