import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const usersSlice = createSlice({
    name: "userList",
    initialState: { user: {} },
    reducers: {},
    extraReducers: (build) => {
        build
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user = payload;
            });
    },
});

export const register = createAsyncThunk("/signup", async (data) => {
    try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
        console.log(error.message);
    }
});

export const login = createAsyncThunk("/login", async (data) => {
    try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
});

export default usersSlice;
