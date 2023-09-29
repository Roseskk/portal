import React, { lazy } from 'react';
import Main from "./pages/main";
import ScheduleTime from "./pages/scheduleTime";

interface Route {
    path: string;
    breadcrumb: string;
    element: React.ReactNode;
    display: boolean;
    title: string;
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/',
        breadcrumb: 'Главная',
        element: <Main />,
        display: true,
        title: 'Главная',
    },
    {
        path: '/schedule',
        breadcrumb: 'Расписание',
        element: <ScheduleTime />,
        display: true,
        title: 'Расписание'
    }
];
