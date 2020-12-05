const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

//Port from environment variable or default - 4001
const port = process.env.PORT || 5000;

//Setting up express and adding socketIo middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
//const formatMessage = require('./utils/messages');
//const {userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');


const router = require('./router');

// set static folder
//app.use(express.static(path.join(__dirname, 'public')));
const botName = 'Chatty';

app.use(router);

//Run when clinet connects

io.on('connection', (socket) => {
    console.log("new user!");

    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id,username, room);


        socket.join(user.room);
        socket.emit('message', formatMessage(botName,'Welcome to Chatty'));


    //Broadcast when a user connects
    socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined the chat`));


    // Send users and room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    } );

    
    });
    
    
    
    //Listen for chatMessage
    socket.on('chatMessage', msg =>
    {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username,msg));
    });

    //Runs when client disconnects
    socket.on('disconnect', () => {
        //const user = userLeave(socket.id);

        console.log("user is gone!");


        /*if(user) {
            io.to(user.room).emit('message', formatMessage(botName,`${user.username} has left the chat`));

            // Send users and room info
            io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
    } );

        }*/

    });

});

//const PORT = 4000 || process.env.PORT ;

server.listen(port, () => console.log(`Server running on port ${port}`));