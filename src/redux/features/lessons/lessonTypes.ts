import { createSlice } from '@reduxjs/toolkit';
import {lessonApi} from "../../api/lessonType";
import {ILessonData} from "../../../types/lessonTypes";

const initialState: {types: ILessonData | []} = {
    types: []
};

export const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(lessonApi.endpoints.getLessonTypes.matchFulfilled, (state, action) => {
            state.types = action.payload
        })
    }

});

export default lessonSlice.reducer;

export const {  } = lessonSlice.actions;
