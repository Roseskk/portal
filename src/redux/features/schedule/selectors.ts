import {ISchedule} from "../../../types/scheduleTypes";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {IRoom} from "../../../types/roomTypes";
import {IGroup} from "../../../types/groupsType";
import {ILesson} from "../../../types/lessonTypes";
import {formatTimeFromTimestamp} from "../../../utility/transformers";


export const getScheduleByDate =() => (state: ISchedule) => {
    // const schedule = useSelector((state: RootState) => state.scheduleReducer.schedule)
    // const rooms = useSelector((state: RootState) => state.roomReducer.rooms)
    // const groups = useSelector((state: RootState) => state.groupReducer.groups)
    // const lessonTypes = useSelector((state: RootState) => state.lessonReducer.types)
    //
    // // @ts-ignore
    // return schedule.map((item: ISchedule) => {
    //     // @ts-ignore
    //     const room = rooms.find((r: IRoom) => r.id === item.room);
    //     // @ts-ignore
    //     const group = groups.find((g: IGroup) => g.id === item.group);
    //     // @ts-ignore
    //     const lesson = lessonTypes.find((l: ILesson) => l.id === item.type);
    //
    //     const timeStart = parseInt(item.timeStart.toString(), 10);
    //     const timeEnd = parseInt(item.timeEnd.toString(), 10);
    //
    //     return {
    //         ...item,
    //         timeStart: formatTimeFromTimestamp(timeStart),
    //         timeEnd: formatTimeFromTimestamp(timeEnd),
    //         room: room || null,
    //         group: group || null,
    //         type: lesson || null
    //     }
    // })
}