import  React, { useState } from "react";
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-container">
			<header className="join-header">
				<h1> Chatty</h1>
			</header>
			<main className="join-main">
				<form>
					<div className="form-control">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
                            required
                            className="joinInput"
                            onChange= {(event) => setName(event.target.value)}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="room">Room</label>
                        <input
							type="text"
							name="room"
							id="room"
							placeholder="Enter username..."
                            required
                            className="joinInput"
                            onChange= {(event) => setRoom(event.target.value)}
						/>
					</div>
                    <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button">Join Chat</button>
                    </Link>
				</form>
			</main>
		</div>
    )
}

export default Join;