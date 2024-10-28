// Ruta sugerida: /components/LoginDialog.tsx

import React, { ChangeEvent, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Snackbar } from '@material-ui/core';
import { a } from 'msw/lib/glossary-2792c6da';
import { CustomSnackbar } from './SnackBar';

interface LoginDialogProps {
    open: boolean;
    onClose: () => void;
    onLogin: (username: string, password: string) => Promise<void>;
}

export function LoginDialog({ open, onClose, onLogin }: LoginDialogProps) {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // console.log(name);
        // console.log(value);
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // console.log(loginData);
    };

    const handleLoginSubmit = async () => {
        const { username, password } = loginData;
        if (!username || !password) {
            setOpenSnackbar(true); // Mostrar Snackbar si hay campos vacíos
            return;
        }
        await onLogin(username, password);
        onClose(); // Cerrar el diálogo tras el login
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false); // Cerrar el Snackbar
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Iniciar Sesión en ONBO</DialogTitle>
            <DialogContent>
                <TextField
                    helperText="Introduce tu usuario de ONBO"
                    autoFocus
                    margin="dense"
                    label="Usuario"
                    name="username"
                    variant="outlined"
                    fullWidth
                    value={loginData.username}
                    onChange={handleLoginChange}
                />
                <TextField
                    helperText="Introduce tu contraseña de ONBO"
                    margin="dense"
                    label="Contraseña"
                    name="password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={loginData.password}
                    onChange={handleLoginChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary" variant="outlined">
                    Cancelar
                </Button>
                <Button onClick={handleLoginSubmit} color="primary" variant="contained">
                    Iniciar Sesión
                </Button>
            </DialogActions>

            <CustomSnackbar
                color="#BDBDBD"
                open={openSnackbar}
                message="Por favor, introduce un usuario y una contraseña"
                onClose={handleCloseSnackbar}
            />
        </Dialog>
    );
}
