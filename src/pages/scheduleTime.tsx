import React, {useEffect, useState} from 'react';
import {useGetScheduleQuery} from "../redux/api/schedule";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IRoom} from "../types/roomTypes";
import {ISchedule} from "../types/scheduleTypes";
import {IGroup} from "../types/groupsType";
import {ILesson} from "../types/scheduleTypes";
import {formatTimeFromTimestamp} from "../utility/transformers";
import ScheduleTable from "../components/schedule/scheduleTable";
import CenteredBox from "../components/ui/paper/mainPaper";
import FreeRooms from "../components/rooms/freeRooms";
import {Typography} from "@mui/material";
import {Outlet, useLocation} from "react-router-dom";


const ScheduleTime: React.FC = () => {
    const location = useLocation();

    const {isSuccess: scheduleSuccess, isError: scheduleError} = useGetScheduleQuery('schedule')
    const schedule = useSelector((state: RootState) => state.scheduleReducer.schedule)
    const rooms = useSelector((state: RootState) => state.roomReducer.rooms)
    // const groups = useSelector((state: RootState) => state.groupReducer.groups)
    const lessonTypes = useSelector((state: RootState) => state.lessonReducer.types)

    const [transformedSchedule, setTransformedSchedule] = useState<ISchedule[]>([])
    const [freeRooms, setFreeRooms] = useState<IRoom[]>([])

    useEffect(() => {
        if (scheduleSuccess && Array.isArray(schedule) && Array.isArray(rooms)) {
            console.log(schedule)

            setFreeRooms(rooms.filter((item: IRoom) => !schedule.some((r: ILesson) => r.room?.id === item.id)))
        }
    },[scheduleSuccess])

    const isCalendarPage = location.pathname.includes('/calendar');

    return(
        <>
            {
                isCalendarPage
                ? <Outlet />
                : <div className={'max-w-screen-xl mx-auto flex flex-col  gap-[20px] px-[25px]'}>
                        <FreeRooms freeRooms={freeRooms} />
                        <div className={'flex flex-col gap-[10px]'}>
                            <Typography className={'text-center !font-bold'}>Расписание</Typography>
                            <ScheduleTable schedule={schedule} />
                        </div>
                    </div>
            }
        </>
    )
}

export default ScheduleTime;