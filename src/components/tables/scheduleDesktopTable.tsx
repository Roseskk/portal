import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ILessonData} from "../../types/scheduleTypes";
import {it} from "node:test";

export interface ScheduleDesktopTableProps {
    schedule: ILessonData
}

const ScheduleDesktopTable: React.FC<ScheduleDesktopTableProps> = ({schedule}) => {
    console.log(schedule)
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
                    {schedule.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:hover': { backgroundColor: 'lightblue' },
                                cursor: 'pointer'
                            }}
                        >
                            <TableCell>{item.start_datetime}</TableCell>
                            <TableCell>{item.end_datetime}</TableCell>
                            <TableCell>{!!item.discipline && typeof item.discipline === 'object' ? item.discipline.title : 'N/A'}</TableCell>
                            <TableCell>{!!item.schedule && typeof item.schedule === 'object' ? item.schedule.title : 'N/A'}</TableCell>
                            <TableCell>{!!item.teacher && typeof item.teacher === 'object' ? item.teacher.id : 'N/A'}</TableCell>
                            <TableCell>{'N/A'}</TableCell>
                            {/*<TableCell>{!!item.group && typeof item.group === 'object' ? item.group.title : 'N/A'}</TableCell>*/}
                            <TableCell>{!!item.room && typeof item.room === 'object' ? item.room.title : 'N/A'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScheduleDesktopTable;