import {createSlice} from "@reduxjs/toolkit";
import {facultyApi} from "../../api/faculty";
import {IFacultyData} from "../../../types/facultyTypes";


const initialState: {faculties: IFacultyData | []} = {
    faculties: []
};

export const facultySlice = createSlice({
    name: 'faculty',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(facultyApi.endpoints.getFaculties.matchFulfilled, (state, action) => {
            state.faculties = action.payload
        })
    }
})

export default facultySlice.reducer