import { getLogin } from "./getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getUsername = createSelector(getLogin, (login) => login.username);
