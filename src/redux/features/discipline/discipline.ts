import {createSlice} from "@reduxjs/toolkit";
import {disciplineApi} from "../../api/discipline";
import {IDisciplinesData} from "../../../types/disciplinesType";

const initialState : {disciplines: IDisciplinesData | []} = {
    disciplines: []
}

export const disciplineSlice = createSlice({
    name: 'discipline',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(disciplineApi.endpoints?.getDisciplines.matchFulfilled, (state, action) => {
            state.disciplines = action.payload
        })
    }
})

export default disciplineSlice.reducer

export const {} = disciplineSlice.actions