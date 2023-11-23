import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IDepartmentsData} from "../../types/departmentsTypes";


export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }), // Исправленная строка
    endpoints: (builder) => ({
        getProfiles: builder.query<IDepartmentsData, string>({
            query: () => `/departments`,
        })
    })
})

export const {
    useGetProfilesQuery
} = profileApi;
