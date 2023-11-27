import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ILesson, ILessonData} from "../../types/scheduleTypes";

interface IScheduleArgs {
    date?: Date
}

export const scheduleApi = createApi({
    reducerPath: 'scheduleApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3000"}),
    tagTypes: ['Lesson'],
    endpoints: (builder) => ({
        getSchedule: builder.query<ILessonData, string>({
            query: (args) => {
                // const {date} = args
                return {
                    url: `/lessons/today`
                }
            },
            providesTags: (result) =>
                result
                    ?
                    [
                        ...result.map(({ id }) => ({ type: 'Lesson', id } as const)),
                        { type: 'Lesson', id: 'LIST' },
                    ]
                    : [{ type: 'Lesson', id: 'LIST' }],
        }),
        getScheduleById: builder.query<ILessonData, string>({
            query: (id) => {
                return {
                    url: `/lessons/schedule/${id}`
                }
            }
        }),
        updateScheduleById: builder.mutation<ILesson, Partial<ILesson>>({
            query: ({id, ...put}) => ({
                url: `/lessons/${id}`,
                method: 'PUT',
                body: put
            }),
            invalidatesTags: ['Lesson']
        })
    })
})


export const {
    useGetScheduleQuery,
    useGetScheduleByIdQuery,

    useUpdateScheduleByIdMutation
} = scheduleApi