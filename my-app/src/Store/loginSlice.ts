import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IUserProfile } from "../Models/UserProfile.type";

export interface ILoginSlice {
  currentUser?: IUserProfile;
  isLoggedIn: boolean;
}

const initState: ILoginSlice = {
  currentUser: undefined,
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload as IUserProfile;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export const selectIsLoggedin = (state: RootState) => state.login.isLoggedIn;
export const selectUserProfile = (state: RootState) => state.login.currentUser;

export default loginSlice.reducer;
