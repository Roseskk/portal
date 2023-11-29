import React from 'react';
import {TableRow, TableCell, TableBody} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { convertISOToTimeString } from "../../../utility/transformers";
import {ILesson} from "../../../types/scheduleTypes";

const TableBodyComponent = React.memo(({ schedule }: {schedule: ILesson[]}) => {
    const navigate = useNavigate();

    return (
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
                        onClick={() => navigate(`calendar/${item.schedule.id}`)}
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
    );
});

export default TableBodyComponent;
