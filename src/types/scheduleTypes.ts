

export interface IScheduleData {
    schedule: ISchedule[]
}

export interface ISchedule {
    timeStart: number | string
    timeEnd: number | string
    subject: string
    instructor: string
    group: number | null
    type: number |  null
    room: number | null
}