
export const ADD_USER = 'ADD_USER';
export const USER_LEAVE = 'USER_LEAVE';

export const addUser = (id, username, room) =>{
  return {
    type: ADD_USER,
    user : { id, username, room}
  };
};


//Join user to chat
function userJoin(id, username, room) {
  const user = {id, username, room};

  store.getState().users.push(user);
  
  return user;
}


// User leaves chat
export const  userLeave = (id) => {
  return {
    type: USER_LEAVE,
    id
  };
  
  const index = users.findIndex(user => user.id === id);

  if(index != -1)
  {
      return users.splice(index,1)[0];

  }

};



/*
//Get current user 
function getCurrentUser(id) {
  return store.getState().users.find(user => user.id === id);
}


// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);

}
*/
