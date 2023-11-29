import React, {useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ILessonData} from "../../types/scheduleTypes";
import {convertISOToTimeString} from "../../utility/transformers";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import { useDebounce } from "@uidotdev/usehooks";
import TableBodyComponent from "./row/tebleBody";

export interface ScheduleDesktopTableProps {
    schedule: ILessonData
}

const ScheduleDesktopTable: React.FC<ScheduleDesktopTableProps> = ({schedule}) => {
    const navigate = useNavigate()
    const scheduleSelector = useSelector((state: RootState) => state.scheduleReducer.schedule)
    const [search, setSearch] = useState('')
    const [mappedSchedule, setMappedSchedule] = useState(schedule)

    const debouncedSearch = useDebounce(search, 600)

    const handleSearch = (e: any) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if (debouncedSearch) {
            const mappedArray = scheduleSelector.filter((lesson) => {
                if (lesson.teacher?.first_name) {
                    // console.log(lesson.teacher.first_name)
                    return `${lesson.teacher.first_name + lesson.teacher.second_name}`.includes(search)
                } else {
                    return -1
                }
            })
            setMappedSchedule(mappedArray)
        } else {
            setMappedSchedule(schedule)
        }
    }, [debouncedSearch, schedule]);

    return(
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Начало</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Конец</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Предмет</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Тип</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray', display:'flex', alignItems: 'center', gap: '5px' }}>
                            Преподаватель
                            <input onChange={handleSearch} value={search} placeholder={'Поиск'} className={'min-w-[150px] p-1 rounded'}  />
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Группа</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Аудитория</TableCell>
                    </TableRow>
                </TableHead>
                <TableBodyComponent schedule={mappedSchedule} />
            </Table>
        </TableContainer>
    )
}

export default ScheduleDesktopTable;