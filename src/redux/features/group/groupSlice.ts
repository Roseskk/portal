import { createSlice } from '@reduxjs/toolkit';
import {groupApi} from "../../api/group";
import {IGroupData} from "../../../types/groupsType";

const initialState: {groups: IGroupData | []} = {
    groups: []
};

export const groupSlice = createSlice({
    name: 'group',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addMatcher(groupApi.endpoints.getGroups.matchFulfilled, (state, action) => {
            state.groups = action.payload
        })
    }

});

export default groupSlice.reducer;

export const {  } = groupSlice.actions;
