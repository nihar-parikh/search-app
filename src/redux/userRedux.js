import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    currentUser: null, //or {}
    isFetching: false,
    error: false,
  },
  reducers: {
    signUpStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    signUpSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action.payload);
      state.currentUser = action.payload;
    },
    signUpFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },

    loginStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
    logout: (state, action) => {
      state.currentUser = null;
      state.error = false;
    },
    getUserStart: (state, action) => {
      state.isFetching = true;
      state.error = false;
      //no action required...u can remove action
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.allUsers = action.payload;
    },
    getUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      //no action required...u can remove action
    },
  },
});

export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;
// const addProduct = cartSlice.actions; wrong method don't do it
// export { addProduct };

const userReducer = userSlice.reducer; //it should be export default
export default userReducer;
