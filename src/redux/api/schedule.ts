import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILessonData} from "../../types/scheduleTypes";

interface IScheduleArgs {
    date?: Date
}

export const scheduleApi = createApi({
    reducerPath: 'scheduleApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        getSchedule: builder.query<ILessonData, string>({
            query: (args) => {
                // const {date} = args
                return {
                    url: `/lessons/today`
                }
            }
        })
    })
})


export const {
    useGetScheduleQuery
} = scheduleApi