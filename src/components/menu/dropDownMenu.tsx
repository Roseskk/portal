import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useModal} from "../../hooks/useModal";
import {useMenuContext} from "../../hooks/useMenu";

interface DropdownMenuProps {
    buttonLabel: React.ReactNode;
    items: string[];
}

function DropdownMenu({ buttonLabel, items }: DropdownMenuProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const {openModal} = useModal();
    const {activeMenu, setActiveMenu} = useMenuContext()

    const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(buttonLabel as string);
    };

    const handleMouseLeave = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    const handleModal = (name: string) => {
        openModal(name);
        setAnchorEl(null);
        setActiveMenu(null);
    };

    useEffect(() => {
        if (activeMenu === 'default') {
            console.log('default')
            setActiveMenu(null)
        }
    },[activeMenu])

    return (
        <div ref={menuRef}>
            <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onMouseEnter={handleMouseEnter}
                style={{
                    backgroundColor: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                }}
                disableRipple
                endIcon={null}
            >
                {buttonLabel}
            </Button>
            <Menu
                style={{
                    position: 'static'
                }}
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={activeMenu === buttonLabel}
                // onClose={handleMouseLeave}
                onMouseDownCapture={handleMouseLeave}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} onClick={() => handleModal(item)}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default DropdownMenu;
