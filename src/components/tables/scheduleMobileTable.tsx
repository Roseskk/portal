import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ISchedule } from '../../types/scheduleTypes';
import {EventNote, Group, Person, Room, Schedule, Subject} from "@mui/icons-material";

export interface ScheduleProps {
    schedule: ISchedule[];
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
                        sx={{
                            '& .MuiTypography-root': {
                                display: 'flex',
                                alignItems: 'center', // Выравнивание текста и иконок по вертикали
                                fontSize: '14px',
                                fontWeight: 'bold',
                            },
                            '& .MuiTypography-root + .MuiTypography-root': {
                                marginLeft: '10px', // Отступ между элементами
                            },
                        }}
                    >
                        <Typography>
                            <Subject sx={{ marginRight: '4px' }} /> {item.subject}
                        </Typography>
                        <Typography>
                            <Schedule sx={{ marginRight: '4px' }} /> {item.timeStart}
                        </Typography>
                        <Typography>
                            <Room sx={{ marginRight: '4px' }} />{!!item.room && typeof item.room === 'object' ? item.room.title : 'N/A'}
                        </Typography>
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
                        {!!item.group && typeof item.group === 'object' ? item.group.title : 'N/A'}
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
                        {item.instructor}
                    </span>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <span>
                        <EventNote sx={{ marginRight: '4px' }} />
                        {!!item.type && typeof item.type === 'object' ? item.type.title : 'N/A'}
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
                        {item.timeEnd}
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
