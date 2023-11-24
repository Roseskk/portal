import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {ILessonData} from '../../types/scheduleTypes';
import {EventNote, Group, Person, Room, Schedule, Subject} from "@mui/icons-material";
import {convertISOToTimeString} from "../../utility/transformers";

export interface ScheduleProps {
    schedule: ILessonData;
}

const MobileTable: React.FC<ScheduleProps> = ({ schedule }) => {
    return (
        <List>
            {schedule.map((item, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-${index}-content`}
                        id={`panel-${index}-header`}
                    >
                        <div className={'w-full grid sm:grid-cols-[200px_1fr_1fr] grid-cols-1'}>
                            <div className="text-center">
                                <Subject />
                                <span>{item.discipline.title}</span>
                            </div>
                            <div className=" text-center">
                                <Schedule />
                                <span>{convertISOToTimeString(item.start_datetime)}</span>
                            </div>
                            <div className="text-center">
                                <Room />
                                <span>{!!item.room && typeof item.room === 'object' ? item.room.title : 'N/A'}</span>
                            </div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            '& .MuiTypography-root': {
                                fontSize: '12px', // Размер шрифта для текста внутри AccordionDetails
                            },
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <span>
                        <Group sx={{ marginRight: '4px' }} />
                        {/*{!!item.group && typeof item.group === 'object' ? item.group.title : 'N/A'}*/}
                    </span>
                                    }
                                    sx={{
                                        fontSize: '0.9rem', // Уменьшение размера шрифта для элементов списка
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <span>
                        <Person sx={{ marginRight: '4px' }} />
                        {!!item.teacher && typeof  item.teacher === 'object' ? `${item.teacher.first_name} ${item.teacher.second_name}` : 'N/A'}
                    </span>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <span>
                        <EventNote sx={{ marginRight: '4px' }} />
                        {!!item.schedule && typeof item.schedule === 'object' ? item.schedule.title : 'N/A'}
                    </span>
                                    }
                                    sx={{
                                        fontSize: '0.9rem', // Уменьшение размера шрифта для элементов списка
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <span>
                        <Schedule sx={{ marginRight: '4px' }} />
                        {convertISOToTimeString(item.end_datetime)}
                    </span>
                                    }
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </List>
    );
};

export default MobileTable;
