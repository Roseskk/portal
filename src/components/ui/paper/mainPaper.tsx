import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {IRoom} from "../../../types/roomTypes";

export interface CenterBoxProps {
    room: IRoom
}

const CenteredBox: React.FC<CenterBoxProps> = ({room}) => {
    return (
        <Paper
            elevation={1}
            sx={{
                padding: 1,
                textAlign: 'center',
                border: '1px solid #ccc',
                borderRadius: '8px', // добавляем закругление углов
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#f0f0f0', // изменение цвета при наведении
                },
            }}
        >
            <Typography >{room.title}</Typography>
        </Paper>
    );
};

export default CenteredBox;
