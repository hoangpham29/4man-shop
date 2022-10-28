import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import toastr from "toastr";
import AUTH_ERROR_CODE from "../../utils/auth_error_code";

const usersSlice = createSlice({
  name: "userList",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        toastr.success("Registered successfully!");
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
        toastr.error(AUTH_ERROR_CODE[state.error]);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.meta.arg;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.code;
        toastr.error(AUTH_ERROR_CODE[state.error]);
      });
  },
});

export const register = createAsyncThunk("/signup", async (data) => {
  await createUserWithEmailAndPassword(auth, data.email, data.password);
});

export const login = createAsyncThunk("/login", async (data) => {
  await signInWithEmailAndPassword(auth, data.email, data.password);
});

export default usersSlice;
