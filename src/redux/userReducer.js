import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
  user: {
    name: "Med Ali Jmal",
    birthDate: "03/03/1997",
    email: "dali123@gmail.com",
    password: "password123",
    profileImg:
      "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",
    role: "admin",
    isLoggedIn: false,
  },
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, user: { ...state.user, isLoggedIn: true } };
    case LOGOUT:
      return { ...state, user: { ...state.user, isLoggedIn: false } };
    default:
      return state;
  }
};

export default userReducer;
