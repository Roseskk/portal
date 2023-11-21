import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {IRoomData} from "../../types/roomTypes";

export const roomApi = createApi({
    reducerPath: "roomApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // Исправленная строка
    endpoints: (builder) => ({
        getRooms: builder.query<IRoomData, string>({
            query: () => `/rooms`,
        })
    })
})

export const {
    useGetRoomsQuery
} = roomApi;
