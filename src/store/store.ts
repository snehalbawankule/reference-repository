import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storeReducer from "./reducer";
//import { getDefaultMiddleware } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    articles: storeReducer,
    userData: storeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
