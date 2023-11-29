import React from 'react';
import { useField, useFormikContext } from "formik";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface ICustomAutocompleteProps {
    label: string;
    name: string;
    options?: { label: string, value: string }[];
}

const CustomSelect: React.FC<ICustomAutocompleteProps> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext();

    const handleChange = (_event: any, newValue: any | null) => {
        // Обновляем значение в форме, используя объект с полями value и label
        setFieldValue(props.name, newValue ? { value: newValue.value, label: newValue.label } : { value: '', label: '' });
    };

    // Находим текущее значение для Autocomplete
    const currentAutocompleteValue = field.value && field.value.value ? props.options?.find(option => option.value === field.value.value) : null;

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
            <Autocomplete
                value={currentAutocompleteValue}
                sx={{
                    background: 'white',
                }}
                onChange={handleChange}
                options={props.options || []}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                        className={meta.touched && meta.error ? 'outline-red-400 p-2 rounded' : 'text-black p-2 rounded'}
                    />
                )}
                // getOptionSelected={(option, value) => option.value === value.value}
                // getOptionDisabled={(option) => option.disabled || false}
                renderOption={(props, option) => <li {...props} key={option.value + option.label}>{option.label}</li>}
            />
        </div>
    );
};

export default CustomSelect;
