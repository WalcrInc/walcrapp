import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage for web
import authReducer from "./authSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  whitelist: ['auth'], // Specify which reducers you want to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure the store
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Ignore these paths in the state
        ignoredPaths: ["register"],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

// Create a persistor
export const persistor = persistStore(store);
