

export interface IScheduleData {
    schedule: ISchedule[]
}

export interface ISchedule {
    timeStart: number
    timeEnd: number
    subject: string
    instructor: string
    group: number
    type: number
    room: number
}