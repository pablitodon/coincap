// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ICoinCapInfoResponse,
  ICoinCapResponse,
  ICoinHistoryResponse,
  IParamsHistory,
} from "../interfaces";
const BASE_URL = import.meta.env.VITE_COINCAP_API_URL;
const API_KEY = import.meta.env.VITE_COINCAP_API_KEY;

const headers = {
  "Accept-Encoding": "gzip",
  Authorization: `Bearer ${API_KEY}`,
};

export const coinCapApi = createApi({
  keepUnusedDataFor: 0,
  reducerPath: "coinCapApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCoinCapData: builder.query<ICoinCapResponse, null>({
      query: () => {
        return {
          url: "/assets",
          method: "GET",
          headers,
        };
      },
    }),
    getCoinInfo: builder.query<ICoinCapInfoResponse, string | null>({
      query: (id = "bitcoin") => {
        return {
          url: `/assets/${id}`,
          method: "GET",
          headers,
          params: {
            id,
          },
        };
      },
    }),
    getHistotyCoin: builder.query<ICoinHistoryResponse, IParamsHistory>({
      query: ({ id = "bitcoin", interval }) => {
        return {
          url: `/assets/${id}/history`,
          method: "GET",
          headers,
          params: {
            id,
            interval,
          },
        };
      },
    }),
  }),
});

export const {
  useGetCoinCapDataQuery,
  useGetCoinInfoQuery,
  useGetHistotyCoinQuery,
} = coinCapApi;
