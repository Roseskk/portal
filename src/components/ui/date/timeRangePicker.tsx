import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TimeRangePickerProps {
    initialStartDate: Date | null;
    initialEndDate: Date | null;
    onDateChange: (startDate: Date | null, endDate: Date | null) => void;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({ initialStartDate, initialEndDate, onDateChange }) => {
    const [startDate, setStartDate] = React.useState<Date | null>(initialStartDate);
    const [endDate, setEndDate] = React.useState<Date | null>(initialEndDate);

    const onChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateChange(start, end);
    };

    return (
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Время"
            dateFormat="HH:mm"
        />
    );
};

export default TimeRangePicker;
