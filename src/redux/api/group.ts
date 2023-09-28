import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IGroupData} from "../../types/groupsType";


export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5050"}),
    endpoints: (builder) => ({
        getGroups: builder.query<IGroupData, string>({
            query: () => `/groups`
        })
    })
})

export const {
    useGetGroupsQuery
} = groupApi

