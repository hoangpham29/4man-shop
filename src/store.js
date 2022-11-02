import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./redux/cartsSlice/cartsSlice";
import usersSlice from "./redux/usersSlice/usersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  carts: cartsSlice.reducer,
  users: usersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;
