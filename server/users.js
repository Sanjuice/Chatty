const users = [];

//Join user to chat
const userJoin = ({id, name, room}) => {
    console.log(name);
    
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const user = {id, name, room};

    const existingUser = users.find((user) => user.name == name && user.room === room);

    if(existingUser) {
        return {error: 'Username is taken'}
    }

    users.push(user);

    return {user};
}

//Get current user 
function getCurrentUser(id) {
    return users.find(user => user.id === id);

}

// User leaves chat

function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if(index != -1)
    {
        return users.splice(index,1)[0];

    }

}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);

}

module.exports = {
    userJoin,
    getCurrentUser,
    getRoomUsers,
    userLeave
};