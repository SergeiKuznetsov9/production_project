import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

// дженерик содержит тип user - то что вернется по запросу, и LoginByUsernameProps -
// тип пэйлоада
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  "login/loginByUsername",
  async ({ username, password }, thunkAPI) => {
    console.log(username);
    console.log(password);
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });

      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data)
      );

      return response.data;
    } catch (error) {
      console.log(error);
      // Хук использовать нельзя, поэтому обращаемся к i18n напрямую
      return thunkAPI.rejectWithValue(
        i18n.t("Вы ввели неверный логин или пароль")
      );
    }
  }
);
