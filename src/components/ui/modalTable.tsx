import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    backdropClasses
} from '@mui/material';
import {useModal} from "../../hooks/useModal";

interface ModalTableProps {
    data: any[];
    open: boolean;
    onClose: () => void;
}

const ModalTable: React.FC<ModalTableProps> = ({ data, open, onClose }) => {
    const {closeModal} = useModal()

    const handleClose = () => {
        closeModal()
    }

    let subtitles: string[] = []

    if (data && data.length > 0) {
        subtitles = Object.keys(data[0])
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
            <DialogTitle>Модальная таблица</DialogTitle>
            <DialogContent>
                <TableContainer
                    component={Paper}
                    sx={{
                        minWidth: 300,
                        width: { xs: '100%', sm: '80%', md: '70%', lg: 800 },
                        height: { xs: 'auto', sm: 500, md: 600 },
                        overflowX: { xs: 'auto', sm: 'hidden' }
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                {subtitles.map((sub, index) => <TableCell key={index}>{sub}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, rowIndex) => (
                                <TableRow key={rowIndex}>
                                    {subtitles.map((field, cellIndex) => (
                                        <TableCell key={cellIndex}>
                                            {item[field]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button  sx={{
                    background: 'black',
                    color: 'white',
                    fontWeight: '800',
                    '&:hover': {
                        background: 'black',
                        opacity: '0.8'
                    },
                }}>
                    Добавить
                </Button>
                <Button onClick={handleClose} color="primary">
                    Закрыть
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ModalTable;
