import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../Actions/userActions";

const userReducers = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
    case REGISTER_USER:
      return action.payload;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default userReducers;
