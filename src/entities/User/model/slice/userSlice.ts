import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    // Вот это вот нужно вызывать в App, т.е. в самом корне
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authData = undefined;
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
