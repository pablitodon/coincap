import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { coinCapApi } from "./services/coinCapApi";
import { useDispatch, useSelector } from "react-redux";
import coinIdReducer from "./redux/coinIdSlice";
export const store = configureStore({
  reducer: {
    dataCoinId: coinIdReducer,
    [coinCapApi.reducerPath]: coinCapApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinCapApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
