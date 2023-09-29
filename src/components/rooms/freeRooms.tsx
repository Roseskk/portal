import React from 'react';
import CenteredBox from "../ui/paper/mainPaper";
import {Typography} from "@mui/material";
import {IRoom} from "../../types/roomTypes";

const FreeRooms: React.FC<any> = ({freeRooms}) => {
    return(
        <>
            <Typography>Свободные аудитории</Typography>
            <div className={'flex flex-wrap gap-[10px]'}>
                {
                    freeRooms.map((room: IRoom) => <CenteredBox room={room} /> )
                }
            </div>
        </>
    )
}

export default FreeRooms;