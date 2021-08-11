import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3333/auth/register",
      user
    );
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:3333/auth/login", user);
    dispatch({ type: LOGIN_USER, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => ({ type: LOGOUT_USER });
