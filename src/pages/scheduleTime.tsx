import React, {useEffect, useState} from 'react';
import {useGetScheduleQuery} from "../redux/api/schedule";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IRoom} from "../types/roomTypes";
import {ISchedule} from "../types/scheduleTypes";
import {IGroup} from "../types/groupsType";
import {ILesson} from "../types/lessonTypes";
import {formatTimeFromTimestamp} from "../utility/transformers";


const ScheduleTime: React.FC = () => {
    const {isSuccess: scheduleSuccess, isError: scheduleError} = useGetScheduleQuery('schedule')
    const schedule = useSelector((state: RootState) => state.scheduleReducer.schedule)
    const rooms = useSelector((state: RootState) => state.roomReducer.rooms)
    const groups = useSelector((state: RootState) => state.groupReducer.groups)
    const lessonTypes = useSelector((state: RootState) => state.lessonReducer.types)

    const [transformedSchedule, setTransformedSchedule] = useState<ISchedule[]>([])

    useEffect(() => {
        if (scheduleSuccess && Array.isArray(schedule) && Array.isArray(rooms) && Array.isArray(groups) && Array.isArray(lessonTypes)) {
            const transformed = schedule.map((item: ISchedule) => {
                const room = rooms.find((r: IRoom) => r.id === item.room);
                const group = groups.find((g: IGroup) => g.id === item.group);
                const lesson = lessonTypes.find ((l: ILesson) => l.id === item.type);

                const timeStart = parseInt(item.timeStart.toString(), 10);
                const timeEnd = parseInt(item.timeEnd.toString(), 10);

                return {
                    ...item,
                    timeStart: formatTimeFromTimestamp(timeStart),
                    timeEnd: formatTimeFromTimestamp(timeEnd),
                    room: room || null,
                    group: group || null,
                    type: lesson || null
                }
            })
            setTransformedSchedule(transformed)
        }
    },[scheduleSuccess])

    console.log(transformedSchedule)
    return(
        <div>

        </div>
    )
}

export default ScheduleTime;