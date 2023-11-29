import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IDisciplinesData} from "../../types/disciplinesType";


export const disciplineApi = createApi({
    reducerPath: 'disciplineApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    endpoints: (builder) => ({
        getDisciplines: builder.query<IDisciplinesData, string>({
            query: () => `/disciplines`
        })
    })
})

export const {
    useGetDisciplinesQuery
} = disciplineApi