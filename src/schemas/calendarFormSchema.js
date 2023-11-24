import * as yup from 'yup'


export const calendarFormSchema = yup.object().shape({
    id: yup.number().required('Обязательнео поле'),
    discipline: yup.number().required('Обязательное поле'),
    teacher: yup.number().required('Обязательное поле'),
    room: yup.number().required('Обязательное поле'),
    link: yup.string(),
    edu_type: yup.number().required('Обязательное поле'),
    time: yup.date().required('Обязательное поле')
})