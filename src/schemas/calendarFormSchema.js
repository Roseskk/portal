import * as yup from 'yup'


export const calendarFormSchema = yup.object().shape({
    id: yup.number().required('Обязательнео поле'),
    discipline: yup.string().required('Обязательное поле'),
    teacher: yup.string().required('Обязательное поле'),
    room: yup.string().required('Обязательное поле'),
    link: yup.string(),
    lessonType: yup.string().required('Обязательное поле'),
    start_datetime: yup.date().required('Обязательное поле'),
    end_datetime: yup.date().required('Обязательное поле')
})