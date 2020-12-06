import React from 'react';

const Room = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? (
          <div>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default Room;
