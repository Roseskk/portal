import {createSlice} from "@reduxjs/toolkit";
import {teachersApi} from "../../api/teachers";
import {ITeacherData} from "../../../types/teacherTypes";

const initialState : {teachers: ITeacherData | []} = {
    teachers: []
}

export const teachersSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(teachersApi.endpoints?.getTeachers.matchFulfilled, (state, action) => {
            state.teachers = action.payload
        })
    }
})


export default teachersSlice.reducer

export const  {} = teachersSlice.actions