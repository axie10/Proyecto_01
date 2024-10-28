import React from 'react';
import { Snackbar, Button, SnackbarContent } from '@mui/material';

interface CustomSnackbarProps {
    open: boolean;
    message: string;
    onClose: () => void;
    color: string;
}


export function CustomSnackbar({ open, message, onClose, color = 'default' }: CustomSnackbarProps) {
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={open}
            autoHideDuration={2000}
            onClose={onClose}
        >
            <SnackbarContent
                style={{ backgroundColor: color }}
                message={
                    <span style={{ fontWeight: 'bold' }}>{message}</span>
                }
                action={
                    <Button style={{ fontWeight: 'bold' }} color="primary" variant='contained' onClick={onClose}>
                        Cerrar
                    </Button>
                }
            />
        </Snackbar>
    );
}