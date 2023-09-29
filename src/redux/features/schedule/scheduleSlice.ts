import {createSlice} from "@reduxjs/toolkit";
import {scheduleApi} from "../../api/schedule";
import {IScheduleData} from "../../../types/scheduleTypes";


const initialState: {schedule: IScheduleData | []} = {
    schedule: []
}
export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(scheduleApi.endpoints.getSchedule.matchFulfilled, (state, action) => {
            state.schedule = action.payload
        })
    }
})


export default scheduleSlice.reducer

export const {} = scheduleSlice.actions