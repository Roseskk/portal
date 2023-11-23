import React from 'react';
import CenteredBox from "../ui/paper/mainPaper";
import {Typography} from "@mui/material";
import {IRoom} from "../../types/roomTypes";

const FreeRooms: React.FC<any> = ({freeRooms}) => {
    return(
        <div className={'flex flex-col gap-[10px] mt-[22px]'}>
            <Typography sx={{textAlign: 'center', fontSize: '22px', fontWeight: '700'}}>Свободные аудитории</Typography>
            <div className={'flex flex-wrap gap-[10px] max-h-[250px] overflow-y-scroll border border p-2 rounded'}>
                {
                    freeRooms.map((room: IRoom) => <CenteredBox room={room} /> )
                }
            </div>
        </div>
    )
}

export default FreeRooms;