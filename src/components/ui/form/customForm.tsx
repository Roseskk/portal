import React from 'react';
import {Form, Formik} from "formik";
import CustomInput from "./customInput";
import CustomButton from "./CustomButton";
import CustomSelect from "./customSelect";

interface ICustomFormProps {
    initialValues:{
        [key: string]: any,
    }
    schema: any,
    internalizationValues: {
        [key: string]: string
    },
    type: {
        [key: string]: string
    },
    selectOptions: {
        [key: string]: { label: string; value: string }[];
    };
    formClass?: string
}

const CustomForm: React.FC<ICustomFormProps> =
    ({
        initialValues,
        schema,
        internalizationValues,
        formClass,
        type,
        selectOptions
     }) => {
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false);
            }}
        >
            {props => (
                <Form
                    className={`${formClass ? formClass : 'grid grid-cols-1 gap-[10px] p-5 rounded bg-[#F1F1F1] z-[100]'}`}
                >
                    {
                        Object.entries(initialValues).map(([name, value]) => {
                            return(
                                <>
                                    {
                                        type[name] === 'select' && <CustomSelect label={internalizationValues[name]} name={name} options={selectOptions[name]} />
                                    }
                                    {
                                        type[name] === 'text' && <CustomInput label={internalizationValues[name]} name={name} />
                                    }
                                </>
                            )
                        })
                    }
                    <CustomButton label={'Сохранить'} handleClick={() => console.log('123')} />
                </Form>
            )}
        </Formik>
    )
}

export default CustomForm;