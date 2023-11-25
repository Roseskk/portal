import React from 'react';
import { useField } from "formik";

interface ICustomSelectProps {
    label: string;
    name: string;
    options?: { label: string, value: string }[];
}

const CustomSelect: React.FC<ICustomSelectProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className={'grid grid-cols-1 gap-[5px]'}>
            <div className={'flex justify-between gap-[5px]'}>
                <label className={meta.touched && meta.error ? 'text-red-500' : ''}>
                    {label}
                </label>
                <span className={meta.touched && meta.error ? 'text-red-500' : ''}>
                    {meta.touched && meta.error ? meta.error : ''}
                </span>
            </div>
            <select
                className={meta.touched && meta.error ? 'outline-red-400 p-2 rounded' : 'text-black p-2 rounded'}
                {...field}
            >
                {
                    !!props.options
                    ? props.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))
                    :[]
                }
            </select>
        </div>
    );
};

export default CustomSelect;
