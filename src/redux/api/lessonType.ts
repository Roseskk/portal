import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILessonData} from "../../types/lessonTypes";


export const lessonApi = createApi({
    reducerPath: 'lessonApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        getLessonTypes: builder.query<ILessonData, string>({
            query: () => `/lesson-types`
        })
    })
})

export const {
    useGetLessonTypesQuery
} = lessonApi

