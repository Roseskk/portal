import React from 'react';
import {useField} from "formik";

interface CustomInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return(
        <div className={'grid grid-cols-1 gap-[5px] '}>
            <div className={'flex justify-between gap-[5px]'}>
                <label
                    className={meta.touched && meta.error ? 'text-red-500 ' : ''}>{label}</label>
                <span
                    className={meta.touched && meta.error ? 'text-red-500 ' : ''}>{meta.touched && meta.error ? meta.error : ''}</span>
            </div>
            <input
                className={meta.touched && meta.error ? 'outline-red-400 p-2 rounded ' : ' text-black p-2 rounded'} {...field} {...props} />
        </div>
    )
}

export default CustomInput;