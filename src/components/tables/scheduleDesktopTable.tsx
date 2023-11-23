import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ILessonData} from "../../types/scheduleTypes";
import {convertISOToTimeString} from "../../utility/transformers";

export interface ScheduleDesktopTableProps {
    schedule: ILessonData
}

const ScheduleDesktopTable: React.FC<ScheduleDesktopTableProps> = ({schedule}) => {
    return(
        <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Начало</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Конец</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Предмет</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Тип</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Преподаватель</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Группа</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', fontSize: '1rem', backgroundColor: 'lightgray' }}>Аудитория</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule.map((item, index) => {
                        const start = convertISOToTimeString(item.start_datetime)
                        const end = convertISOToTimeString(item.end_datetime)
                        return(
                            <TableRow
                                key={index}
                                sx={{
                                    '&:hover': { backgroundColor: 'lightblue' },
                                    cursor: 'pointer'
                                }}
                            >
                                <TableCell>{start}</TableCell>
                                <TableCell>{end}</TableCell>
                                <TableCell>{!!item.discipline && typeof item.discipline === 'object' ? item.discipline.title : 'N/A'}</TableCell>
                                <TableCell>{!!item.lessonType && typeof item.lessonType === 'object' ? item.lessonType.title : 'N/A'}</TableCell>
                                <TableCell>{!!item.teacher && typeof item.teacher === 'object' ? `${item.teacher.first_name} ${item.teacher.second_name}` : 'N/A'}</TableCell>
                                <TableCell>{!!item.schedule && typeof item.schedule === 'object' ? item.schedule.title : 'N/A'}</TableCell>
                                {/*<TableCell>{!!item.group && typeof item.group === 'object' ? item.group.title : 'N/A'}</TableCell>*/}
                                <TableCell>{!!item.room && typeof item.room === 'object' ? item.room.title : 'N/A'}</TableCell>
                            </TableRow>
                        )})
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScheduleDesktopTable;