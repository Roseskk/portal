import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {ISchedule} from "../../types/scheduleTypes";

export interface ScheduleDesktopTableProps {
    schedule: ISchedule[]
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
                    {schedule.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:hover': { backgroundColor: 'lightblue' },
                                cursor: 'pointer'
                            }}
                        >
                            <TableCell>{item.timeStart}</TableCell>
                            <TableCell>{item.timeEnd}</TableCell>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell>{!!item.type && typeof item.type === 'object' ? item.type.title : 'N/A'}</TableCell>
                            <TableCell>{item.instructor}</TableCell>
                            <TableCell>{!!item.group && typeof item.group === 'object' ? item.group.title : 'N/A'}</TableCell>
                            <TableCell>{!!item.room && typeof item.room === 'object' ? item.room.title : 'N/A'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ScheduleDesktopTable;