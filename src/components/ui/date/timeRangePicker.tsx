import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

interface TimeRangePickerProps {
    name: string,
    date: {
        start_datetime: Date,
        end_datetime: Date
    }
}

interface FormValues {
    [key: string]: {
        start_datetime: Date | null;
        end_datetime: Date | null;
    };
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({name, ...props}) => {
    const { setFieldValue, values } = useFormikContext<FormValues>();
    console.log(typeof values.dateTime.start_datetime)

    // Получаем текущие значения дат из Formik
    const currentStart = new Date(values[name]?.start_datetime!);
    const currentEnd = new Date(values[name]?.end_datetime!);

    const onChange = (dates: [Date | null, Date | null]) => {
        if (Array.isArray(dates)) {
            const [start, end] = dates;
            setFieldValue(name, dates ? {start_datetime: start, end_datetime: end} : {start_datetime: null, end_datetime: null});
            console.log(dates)
        } else {
        }

            // Обработ
    };

    return (
        <DatePicker
            selectsRange
            startDate={currentStart}
            endDate={currentEnd}
            onChange={onChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Время"
            dateFormat="HH:mm"
        />
    );
};

export default TimeRangePicker;
