// Ruta sugerida: /components/MainForm.tsx

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Formulario } from './Formulario';
import { LoginDialog } from './LoginDialog';
import { useEntity } from '@backstage/plugin-catalog-react';

interface FormData {
    aplicacion: string;
    nombreElementoPromocinal: string;
    tecnologia: string;
    tipo: string;
}

export function MainForm() {

    const { entity } = useEntity();
    
    const [formData, setFormData] = useState<FormData>({
        aplicacion: entity.metadata.name,
        nombreElementoPromocinal: '',
        tipo: '',
        tecnologia: '',
    });

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name as string]: value as string,
        }));
    };

    const handleLogin = async (username: string, password: string) => {
        const fetchedToken = `${username}:${password}`;
        localStorage.setItem('token', fetchedToken);
        setToken(fetchedToken);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!token) {
            setIsLoginOpen(true);
            return;
        }
        console.log('Formulario enviado:', formData);
        alert('Formulario enviado');
        // Lógica para enviar el formulario al servicio
    };

    return (
        <>
            <Formulario
                formData={formData}
                onChange={handleChange}
                onSelectChange={handleSelectChange}
                onSubmit={handleSubmit}
            />

            <LoginDialog
                open={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
            />
        </>
    );
}
