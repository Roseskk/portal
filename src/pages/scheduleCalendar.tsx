import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from 'moment';
import 'moment/locale/ru'; // Импортируйте локализацию для русского языка

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
    const [events, setEvents] = useState<Event[]>([
        {
            id: 1,
            title: 'Событие 1',
            start: new Date(2023, 9, 1, 10, 0),
            end: new Date(2023, 9, 1, 12, 0),
        },
        {
            id: 2,
            title: 'Событие 2',
            start: new Date(2023, 9, 5, 14, 0),
            end: new Date(2023, 9, 5, 16, 0),
        },
    ]);

    const onEventDrop = ({ event, start, end }: any) => {
        const updatedEvents = events.map((e) =>
            e.id === event.id ? { ...e, start, end } : e
        );
        setEvents(updatedEvents);
    };

    return (
        <div className={'h-[500px] mt-[25px]'}>
            <DragAndDropCalendar
                localizer={localizer}
                events={events}
                defaultDate={new Date(2023, 9, 1)}
                defaultView="month"
                onEventDrop={onEventDrop}
                messages={messages}
            />
        </div>
    );
};

export default MyCalendar;
