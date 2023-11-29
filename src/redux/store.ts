import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
//апи
import {profileApi} from './api/departments'
import {facultyApi} from "./api/faculty";
import {groupApi} from "./api/group";
import {scheduleApi} from "./api/schedule";
import {lessonApi} from "./api/lessonType";
import {roomApi} from "./api/room";
import {teachersApi} from "./api/teachers";
import {disciplineApi} from "./api/discipline";

//экшены подключаем
import itemReducer from './features/items/item';
import facultyReducer from './features/faculty/facultySlice'
import profileReducer from './features/profile/profileSlice'
import groupReducer from './features/group/groupSlice'
import scheduleReducer from './features/schedule/scheduleSlice'
import lessonReducer from './features/lessons/lessonTypes'
import roomReducer from './features/room/roomSlice'
import teacherReducer from './features/teachers/teachersSlice'
import disciplineReducer from './features/discipline/discipline'


export const store = configureStore({
    reducer: {
        // экшены
        someFeature: itemReducer,
        profileReducer: profileReducer,
        facultyReducer: facultyReducer,
        groupReducer: groupReducer,
        scheduleReducer: scheduleReducer,
        lessonReducer: lessonReducer,
        roomReducer: roomReducer,
        teacherReducer: teacherReducer,
        disciplineReducer: disciplineReducer,
        // апи
        [scheduleApi.reducerPath]: scheduleApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [facultyApi.reducerPath]: facultyApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [lessonApi.reducerPath]: lessonApi.reducer,
        [roomApi.reducerPath]: roomApi.reducer,
        [teachersApi.reducerPath]: teachersApi.reducer,
        [disciplineApi.reducerPath]: disciplineApi.reducer
    },
    middleware: (getDefaultMiddleware =>
            //мв
        getDefaultMiddleware().concat(
            profileApi.middleware,
            facultyApi.middleware,
            groupApi.middleware,
            scheduleApi.middleware,
            lessonApi.middleware,
            roomApi.middleware,
            teachersApi.middleware,
            disciplineApi.middleware
        )
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
