import React, {useEffect, useState} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from 'moment';
import 'moment/locale/ru';
import {useParams} from "react-router-dom";
import {useGetScheduleByIdQuery} from "../redux/api/schedule";
import {ILesson, ILessonData} from "../types/scheduleTypes";
import {convertISOToDate} from "../utility/transformers";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

interface Event {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

const messages = {
    today: 'Сегодня',
    previous: 'Назад',
    next: 'Вперед',
    month: 'Месяц',
    week: 'Неделя',
    day: 'День',
    agenda: 'Повестка дня',
};

const MyCalendar: React.FC = () => {
    const {id}  = useParams()
    const {data, isLoading, isSuccess, isError} = useGetScheduleByIdQuery(id!)
    // console.log(data)
    const [events, setEvents] = useState<Event[] | []>([]);

    useEffect(() => {
        if (isSuccess) {
            const mappedData = data.map((i : ILesson) => {
                const startDate = convertISOToDate(i.start_datetime)
                const endDate = convertISOToDate(i.end_datetime)
                return {
                    id: i.id,
                    title: i.discipline.title,
                    start: startDate,
                    end: endDate
                }
            })
            setEvents(mappedData)
        }
    }, [isSuccess]);

    const onEventDrop = ({ event, start, end }: any) => {
        const updatedEvents = events.map((e) =>
            e.id === event.id ? { ...e, start, end } : e
        );
        setEvents(updatedEvents);
    };

    if (isLoading) {
        return <div>Loading....</div>
    }

    return (
        <div className={'h-[500px] mt-[25px]'}>
            <DragAndDropCalendar
                localizer={localizer}
                events={events}
                defaultDate={new Date()}
                defaultView="month"
                onEventDrop={onEventDrop}
                messages={messages}
                style={{height: '100vh'}}
            />
        </div>
    );
};

export default MyCalendar;
