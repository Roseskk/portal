import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Button from '@mui/material/Button';

interface CustomNavigationMenuProps {
    buttonLabel: React.ReactNode;
    items: string[];
}

function CustomNavigationMenu({ buttonLabel, items }: CustomNavigationMenuProps) {
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
        <NavigationMenu.Root>
            <NavigationMenu.List>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger asChild>
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
                        >
                            {buttonLabel}
                        </Button>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content
                        style={{
                            position: 'absolute',
                            zIndex: 1000,
                            backgroundColor: '#ffffff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            borderRadius: '8px',
                            padding: '10px',
                            minWidth: '200px'
                        }}
                    >
                        {items.map((item, index) => (
                            <div key={index}
                                 style={{
                                     padding: '8px 16px',
                                     cursor: 'pointer',
                                     fontSize: '16px',
                                     color: '#333',
                                     borderBottom: index !== items.length - 1 ? '1px solid #eaeaea' : 'none',
                                 }}
                                 onClick={() => handleMenuTab(item)}
                            >
                                {item}
                            </div>
                        ))}
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
}

export default CustomNavigationMenu;
