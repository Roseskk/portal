import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IFacultyData} from "../../types/facultyTypes";


export const facultyApi = createApi({
    reducerPath: 'facultyApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5050"}),
    endpoints: (builder) => ({
        getFaculties: builder.query<IFacultyData, string>({
            query: () => `/faculty`
        })
    })
})

export const {
    useGetFacultiesQuery
} = facultyApi