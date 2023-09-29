import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { ISchedule } from '../../types/scheduleTypes';

export interface ScheduleProps {
    schedule: ISchedule[];
}

const ScheduleTable: React.FC<ScheduleProps> = ({ schedule }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Начало</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Конец</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Предмет</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Тип</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Преподаватель</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Группа</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Аудитория</TableCell>
                        {/* Другие заголовки */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedule.map((item, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:hover': { backgroundColor: 'lightgray' },
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
    );
};

export default ScheduleTable;
