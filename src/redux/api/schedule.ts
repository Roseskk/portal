import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IScheduleData} from "../../types/scheduleTypes";

interface IScheduleArgs {
    date?: Date
}

export const scheduleApi = createApi({
    reducerPath: 'scheduleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5050'}),
    endpoints: (builder) => ({
        getSchedule: builder.query<IScheduleData, IScheduleArgs>({
            query: (args) => {
                const {date} = args
                return {
                    url: `/schedule`
                }
            }
        })
    })
})


export const {
    useGetScheduleQuery
} = scheduleApi