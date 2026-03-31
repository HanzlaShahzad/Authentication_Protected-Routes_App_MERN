import { combineReducers, configureStore } from "@reduxjs/toolkit";
import post from "../Slices/userSlice.jsx";
import postProduct from "../Slices/signin.jsx";
import items from "../Slices/itemsSlice.jsx";
import { persistReducer, persistStore } from "redux-persist";
import logouts from "../Slices/logout.jsx";

// ✅ FIXED storage
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const reducers = combineReducers({
  post,
  postProduct,
  items,
  logouts,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
