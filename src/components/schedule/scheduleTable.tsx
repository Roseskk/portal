import React from 'react';
import {ILessonData} from '../../types/scheduleTypes';
import {useResize} from "../../hooks/useResize";
import ScheduleMobileTable from "../tables/scheduleMobileTable";
import ScheduleDesktopTable from "../tables/scheduleDesktopTable";

export interface ScheduleProps {
    schedule: ILessonData;
}

const ScheduleTable: React.FC<ScheduleProps> = ({ schedule }) => {
    const {width} = useResize()
    return (
        <>
            {
                width <= 840
                ? <ScheduleMobileTable schedule={schedule} />
                : <ScheduleDesktopTable schedule={schedule} />
            }
        </>
    );
};

export default ScheduleTable;
