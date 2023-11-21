
export type ILessonData = ILesson[]

export interface ILesson {
    id: number
    link: string
    link2: string
    start_datetime: string
    end_datetime: string
    theme: string
    discipline: any
    teacher: any
    teacher2: any
    room: Room
    room2: any
    schedule: ISchedule
    lessonType: LessonType
}

export interface Room {
    id: number
    title: string
}

export interface ISchedule {
    id: number
    title: string
    start_date: string
    end_date: string
    archive: boolean
}

export interface LessonType {
    id: number
    title: string
}
