import React from 'react';
import { NavLink } from "react-router-dom";
import DropdownMenu from "../menu/dropDownMenu";
import { Typography } from "@mui/material";
import { MenuOutlined} from "@mui/icons-material";

const Navigation: React.FC = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-xl">
            <div className="flex items-center gap-4 p-2">
                <NavLink className="underline font-bold" to="/">Главная</NavLink>
            </div>
            <div className="hidden md:flex items-center">
                <DropdownMenu buttonLabel="Справочники" items={['Факультеты', 'Профили', 'Группы']} />
                <DropdownMenu buttonLabel="Расписания" items={['Расписание на дату']} />
                <DropdownMenu buttonLabel="Ведомости" items={['Все ведомости']} />
                <DropdownMenu buttonLabel="Пользователи" items={['Студенты', 'Преподаватели']} />
            </div>
            <div className="flex">
                <Typography className="font-bold">Логин</Typography>
            </div>
            {/* Гамбургер-меню для мобильных устройств */}
            <div className="md:hidden flex items-center">
                <button className="text-white">
                    <MenuOutlined className={'bg-black'} />
                </button>
            </div>
        </nav>
    );
}

export default Navigation;
