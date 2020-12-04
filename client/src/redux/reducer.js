const INITIAL_STATE = {
    room: [],
    users: [],
    currUser: null
  };

import users from '../../../utils/users';
  import {
    ADD_USER,
    USER_LEAVE
  } from './actions';
import { store } from './store';
  
  export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          users: users.push(action.user)
        }
      case USER_LEAVE:
        const index = users.findIndex(user => user.id === action.id);
        return {
          ...state,
          users: (index != -1)?  users.splice(index,1)[0] : users
        }
      default:
        return state;
    }
  };