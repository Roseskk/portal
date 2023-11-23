import {IFaculty} from "./facultyTypes";

export type IDepartmentsData = IDepartment[]

export interface IDepartment {
    id: number
    title: string
    faculty: IFaculty
}
