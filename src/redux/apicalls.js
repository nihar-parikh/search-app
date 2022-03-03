import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "./userRedux";
import axios from "axios";

export const signUpUser = async (user, dispatch) => {
  console.log("userInfo: ", user);
  dispatch(signUpStart());

  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/signup",
      user
    );
    console.log("response: ", res.data);
    if (res.data) {
      dispatch(signUpSuccess(res.data));
    } else {
      dispatch(signUpFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(signUpFailure());
  }
};

export const login = async (dispatch, userInfo) => {
  //console.log("userInfo: ", userInfo);
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "http://localhost:8000/api/users/login",
      userInfo
    ); //don't use {userInfo:userInfo} bcoz already userInfo is an object
    //console.log("response: ", res.data);
    // console.log(res.data.token);
    dispatch(loginSuccess(res.data));
    // console.log(res.data);
  } catch (error) {
    //console.log("error:", error);
    dispatch(loginFailure());
  }
};

export const getUsers = async (query, dispatch) => {
  dispatch(getUserStart());

  try {
    const res = await axios.get(`http://localhost:8000/api/users`);
    // console.log("response: ", res.data);
    if (res.data) {
      dispatch(getUserSuccess(res.data));
    } else {
      dispatch(getUserFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(getUserFailure());
  }
};
