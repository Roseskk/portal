import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ITeacherData} from "../../types/teacherTypes";


export const teachersApi = createApi({
    reducerPath: 'teacherApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        getTeachers: builder.query<ITeacherData, string>({
            query: () => `/teachers`
        })
    })
})

export const {
    useGetTeachersQuery
} = teachersApi