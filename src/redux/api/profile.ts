import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IProfileData } from "../../types/profileTypes";

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5050" }), // Исправленная строка
    endpoints: (builder) => ({
        getProfiles: builder.query<IProfileData, string>({
            query: () => `/profile`,
        })
    })
})

export const {
    useGetProfilesQuery
} = profileApi;
