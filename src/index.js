import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyles";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./redux/cartsSlice/cartsSlice";
import usersSlice from "./redux/usersSlice/usersSlice";

const store = configureStore({
    reducer: {
        carts: cartsSlice.reducer,
        users: usersSlice.reducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
