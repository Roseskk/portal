import { createSlice } from '@reduxjs/toolkit';
import {roomApi} from "../../api/room";
import {IRoomData} from "../../../types/roomTypes";

const initialState: {rooms: IRoomData | []} = {
    rooms: []
};

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addMatcher(roomApi.endpoints.getRooms.matchFulfilled, (state, action) => {
            state.rooms = action.payload
        })
    }

});

export default roomSlice.reducer;

export const {  } = roomSlice.actions;
