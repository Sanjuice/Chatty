import  React, { useState } from "react";
import { Link } from 'react-router-dom';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-container">
			<section class="hero is-primary is-fullheight">
  <div class="hero-body is-flex is-justify-content-center">
  <div className="container">
    <div class="column is-half has-text-centered is-offset-one-quarter">
		
		<div className="box">
		<h1 class="title has-text-black">
        Chatty
      </h1>
	  <main className="join-main">
				<form>
					<div className="field is-horizontal">
						<div className="field-label is-normal">
						<label htmlFor="username" className="label">Username</label>
						</div>
						<div class="field-body">
    					<div class="field">
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Enter username..."
                            required
                            className="input"
                            onChange= {(event) => setName(event.target.value)}
						/>
						</div>
						</div>
					</div>
					<div className="field is-horizontal">
						<div className="field-label is-normal">
						<label htmlFor="room" className="label">Room</label>
						</div>
						<div class="field-body">
    					<div class="field">
                        <input
							type="text"
							name="room"
							id="room"
							placeholder="Enter username..."
                            required
                            className="input"
                            onChange= {(event) => setRoom(event.target.value)}
						/>
						</div>
						</div>
					</div>
                    <Link onClick={(event) => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button type="submit" className="button is-success">Join Chat</button>
                    </Link>
				</form>
			</main>
      <h2 class="subtitle">
        Fullheight subtitle
      </h2>

		</div>
		
      
    </div>
	</div>
  </div>
</section>
			<header className="join-header">
				<h1> Chatty</h1>
			</header>
			
		</div>
    )
}

export default Join;