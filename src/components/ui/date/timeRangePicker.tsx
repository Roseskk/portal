import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormikContext } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

interface TimeRangePickerProps {
    name: string,
    label: string,
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

    const currentStart = new Date(values[name]?.start_datetime!) || new Date();
    const currentEnd = new Date(values[name]?.end_datetime!) || new Date();

    const handleTimeChange = (time: Date | null, fieldName: 'start_datetime' | 'end_datetime') => {
        setFieldValue(`${name}.${fieldName}`, time);
    };

    return (
        <div className={'flex items-center gap-[20px]'}>
            <div className={'w-[200px]'}>
                <pre>Начало</pre>
                <DatePicker
                    className={'rounded p-2 text-center font-bold'}
                    selected={currentStart}
                    onChange={(time) => handleTimeChange(time, 'start_datetime')}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Начало"
                    dateFormat="HH:mm"
                />
            </div>
            <div className={'w-[200px]'}>
                <pre>Конец</pre>
                <DatePicker
                    className={'rounded p-2 text-center font-bold'}
                    selected={currentEnd}
                    onChange={(time) => handleTimeChange(time, 'end_datetime')}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Конец"
                    dateFormat="HH:mm"
                />
            </div>
        </div>
    );
};

export default TimeRangePicker;
