import React, { createContext, useState, useContext } from 'react';
import {ILayout} from "../types/layouts";

type MenuContextType = {
    activeMenu: string | null;
    setActiveMenu: React.Dispatch<React.SetStateAction<string | null>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};

export const MenuProvider: React.FC<ILayout> = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
