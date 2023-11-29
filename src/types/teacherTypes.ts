
export interface ITeacherData {
    teachers: ITeacher[]
}

export interface ITeacher {
    id: number,
    first_name: string
    middle_name: string,
    second_name: string,
    user_id: number
}