import { createSlice } from '@reduxjs/toolkit';
import {profileApi} from "../../api/profile";
import {IProfileData} from "../../../types/profileTypes";

const initialState: {profile: IProfileData | []} = {
    profile: []
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getProfileData: (state, action) => {
            state.profile = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(profileApi.endpoints.getProfiles.matchFulfilled, (state, action) => {
            state.profile = action.payload
        })
    }

});

export default profileSlice.reducer;

export const { getProfileData } = profileSlice.actions;
