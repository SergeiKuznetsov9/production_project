import { getLogin } from "./getLoginState";
import { createSelector } from "@reduxjs/toolkit";

export const getPassword = createSelector(getLogin, (login) => login.password);
