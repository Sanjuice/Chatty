const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { userJoin, getCurrentUser, userLeave, getRoomUsers  } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

// set static folder
//app.use(express.static(path.join(__dirname, 'public')));
const botName = 'Chatty';


//Run when clinet connects

io.on('connection', (socket) => {
    console.log("new user!");

    socket.on('joinRoom', ({name, room}, callback) => {
        console.log(name +" " +room);
        
        const {error, user} = userJoin({id:socket.id, name, room});

        

        if(error) {
            return callback(error);
        }

        
        socket.emit('message', {user: botName, text:`Welcome to the room ${user.room}`});


    //Broadcast when a user connects
    socket.broadcast.to(user.room).emit('message', { user: botName, text:`${user.username} has joined the chat`});
    socket.join(user.room);

    // Send users and room info
    /*io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    } );*/

    callback();
    });
    
    
    
    //Listen for chatMessage
    socket.on('chatMessage', (message, callback) =>
    {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message});

        callback();
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

//app.use(router);


server.listen(process.env.PORT || 5000, () => console.log(`Server running`));