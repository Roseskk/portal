import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import Button from '@mui/material/Button';
import { useModal } from '../../hooks/useModal';

interface DropdownMenuProps {
    buttonLabel: React.ReactNode;
    items: string[];
}

function CustomDropdownMenu({ buttonLabel, items }: DropdownMenuProps) {
    const navigate = useNavigate();
    const { openModal } = useModal();

    const handleMenuTab = (item: string) => {
        if (item === 'Расписание на дату') {
            navigate('/schedule');
            return;
        }
        openModal(item);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    style={{
                        backgroundColor: '#f5f5f5',
                        color: 'black',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        textTransform: 'none',
                        transition: 'background-color 0.3s, box-shadow 0.3s',
                        marginRight: '10px',
                    }}
                    disableRipple
                    endIcon={null}
                >
                    {buttonLabel}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
                    padding: '5px',
                }}
            >
                {items.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        onSelect={() => handleMenuTab(item)}
                        style={{
                            padding: '10px 15px', // отступы для каждого пункта
                            cursor: 'pointer', // курсор в виде указателя
                            fontSize: '16px', // размер шрифта
                            color: '#333',
                            borderBottom: index !== items.length - 1 ? '1px solid #eaeaea' : undefined, // разделительные линии между пунктами
                        }}
                    >
                        {item}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>

        </DropdownMenu>
    );
}

export default CustomDropdownMenu;
