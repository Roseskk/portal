import React, {useEffect, useState} from 'react';
import {Calendar, momentLocalizer, SlotInfo, View} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from 'moment';
import 'moment/locale/ru';
import {useParams} from "react-router-dom";
import {useGetScheduleByIdQuery} from "../redux/api/schedule";
import {ILesson, ILessonData} from "../types/scheduleTypes";
import {convertISOToDate} from "../utility/transformers";
import CustomForm from "../components/ui/form/customForm";
import {calendarFormSchema} from "../schemas/calendarFormSchema";
import HelperChildComponent from "../helpers/helperChildComponent";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IRoom} from "../types/roomTypes";

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

interface Event {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

interface IFormikEventProps extends Event {
    lesson: ILesson
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

    const roomsSelector = useSelector((state: RootState) => state.roomReducer.rooms)
    const lessonTypesSelector = useSelector((state: RootState) => state.lessonReducer.types)

    console.log(roomsSelector, lessonTypesSelector)

    const [events, setEvents] = useState<Event[] | []>([]);
    const [view, setView] = useState('month')
    const [date, setDate] = useState(new Date())
    const [isOpen, setOpen] = useState(false)
    const [initialFormikValue, setInitialFormikValue] = useState<any>({
        id: null,
        discipline: {
            id: null,
            title: ''
        },
        teacher:{
            id: null,
            title: ''
        },
        room: {
            id: null,
            title: ''
        },
        link: '',
        lessonType: {
            id: null,
            title: ''
        },
        start_datetime: '',
        end_datetime: ''
    })

    const handleSelectSlot = (slotInfo: SlotInfo) => {
        setView('day');
        setDate(slotInfo.start)

    }

    const handleEventSelect = (event: IFormikEventProps ) => {
        const {lesson} = event
        const {id, discipline, teacher, room, link, lessonType, start_datetime, end_datetime } = lesson
        setOpen(true)
        setInitialFormikValue({
            id,
            discipline,
            teacher,
            room,
            link,
            lessonType,
            start_datetime,
            end_datetime
        })
    }


    useEffect(() => {
        if (isSuccess) {
            const mappedData = data.map((i : ILesson) => {
                const startDate = convertISOToDate(i.start_datetime)
                const endDate = convertISOToDate(i.end_datetime)
                return {
                    id: i.id,
                    title: i.discipline.title,
                    start: startDate,
                    end: endDate,
                    lesson: {
                        ...i
                    }
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
                view={view as View}
                onView={(newView) => setView(newView)}
                localizer={localizer}
                events={events}
                date={date}
                defaultView="month"
                onEventDrop={onEventDrop}
                messages={messages}
                style={{height: '100vh'}}
                onSelectSlot={(info) => handleSelectSlot(info)}
                onSelectEvent={(e) => handleEventSelect(e as IFormikEventProps)}
                selectable
            />
            <HelperChildComponent
                displayValue={isOpen}
                handleOut={() => setOpen(false)}
            >
                <CustomForm
                    initialValues={initialFormikValue}
                    internalizationValues={{
                        id: 'Код',
                        discipline: 'Дисциплина',
                        teacher: 'Преподаватель',
                        room: 'Аудитория',
                        link: 'Ссылка',
                        lessonType: 'Тип урока',
                        start_datetime: 'Начало',
                        end_datetime: 'Конец'
                    }}
                    type={{
                        id: 'text',
                        discipline: 'select',
                        teacher: 'select',
                        room: 'select',
                        link: 'text',
                        lessonType: 'select',
                        start_datetime: 'text',
                        end_datetime: 'text'
                    }}
                    selectOptions={{
                        discipline: [{value: '123', label: '123'}],
                        teacher: [{value: '123', label: '123'}],
                        room: Array.isArray(roomsSelector) ? roomsSelector.map((room: IRoom) => ({
                            value: room.id.toString(),
                            label: room.title
                        })) : [{value: '0', label: 'Нет комнат'}],
                        lessonType: Array.isArray(lessonTypesSelector) ? lessonTypesSelector.map((type : IRoom) => ({
                            value: type.id.toString(),
                            label: type.title
                        })) : [{value: '0', label: 'Нет комнат'}],
                    }}
                    schema={calendarFormSchema}
                />
            </HelperChildComponent>
        </div>
    );
};

export default MyCalendar;
