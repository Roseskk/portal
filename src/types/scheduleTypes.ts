import {IGroup} from "./groupsType";
import {ILesson} from "./lessonTypes";
import {IRoom} from "./roomTypes";


export interface IScheduleData {
    schedule: ISchedule[]
}

export interface ISchedule {
    id: number,
    timeStart: number | string
    timeEnd: number | string
    subject: string
    instructor: string
    group: number | null | IGroup
    type: number |  null | ILesson
    room: number | null | IRoom
}