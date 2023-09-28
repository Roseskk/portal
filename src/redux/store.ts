// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {profileApi} from './api/profile'
import {facultyApi} from "./api/faculty";
import {groupApi} from "./api/group";

import itemReducer from './features/items/item';
import facultyReducer from './features/faculty/facultySlice'
import profileReducer from './features/profile/profileSlice'
import groupReducer from './features/group/groupSlice'

export const store = configureStore({
    reducer: {
        someFeature: itemReducer,
        profileReducer: profileReducer,
        facultyReducer: facultyReducer,
        groupReducer: groupReducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [facultyApi.reducerPath]: facultyApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
    },
    middleware: (getDefaultMiddleware =>
        getDefaultMiddleware().concat(profileApi.middleware, facultyApi.middleware, groupApi.middleware)
    )
});

// Инференция типов для использования с `useDispatch`
export type AppDispatch = typeof store.dispatch;

// Инференция типов для использования с `useSelector`
export type RootState = ReturnType<typeof store.getState>;

// Инференция типов для thunk-действий
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
