import * as yup from 'yup'


export const calendarFormSchema = yup.object().shape({
    id: yup.number().required('Обязательнео поле'),
    discipline: yup.object().shape({
        value: yup.string(),
        label: yup.string()
    }),
    teacher: yup.object().shape({
        value: yup.string(),
        label: yup.string()
    }),
    room: yup.object().shape({
        value: yup.string(),
        label: yup.string()
    }),
    link: yup.string(),
    lessonType: yup.object().shape({
        value: yup.string(),
        label: yup.string()
    }),
    start_datetime: yup.date().required('Обязательное поле'),
    end_datetime: yup.date().required('Обязательное поле')
})