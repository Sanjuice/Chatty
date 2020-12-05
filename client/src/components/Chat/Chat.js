import  React, { useState, useEffect }  from "react";
import queryString from 'query-string';
import io from 'socket.io-client';
import userEvent from "@testing-library/user-event";


let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const ENDPOINT = 'http://127.0.0.1:5000';

    useEffect( () => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

    }, [ENDPOINT, location.search]);
    return (
        <h1> Chatty </h1>
    )
}

export default Chat;