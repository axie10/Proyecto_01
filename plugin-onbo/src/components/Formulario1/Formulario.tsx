// Ruta sugerida: /components/Formulario.tsx

import React, { ChangeEvent } from 'react';
import { Box, TextField, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

interface FormData {
    nombreElementoPromocinal: string;
    tecnologia: string;
    tipo: string;
}

interface FormularioProps {
    formData: FormData;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSelectChange: (e: ChangeEvent<{ name?: string; value: unknown }>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export function Formulario({ formData, onChange, onSelectChange, onSubmit }: FormularioProps) {
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}
        >
            <InputLabel style={{ marginTop: '10px', color: 'white', marginBottom: '10px', fontWeight: 'bolder' }}>Nombre</InputLabel>
            <TextField
                label="Nombre del Elemento Promocional"
                name="nombreElementoPromocinal"
                value={formData.nombreElementoPromocinal}
                onChange={onChange}
                fullWidth
                required
                variant="outlined"
            />

            <InputLabel style={{ marginTop: '30px', color: 'white', marginBottom: '10px', fontWeight: 'bolder' }}>Tipo</InputLabel>
            <Select
                value={formData.tipo}
                name="tipo"
                label="tipo"
                variant="outlined"
                onChange={onSelectChange}
            >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                <MenuItem value="SpringBoot">SpringBoot</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="Mongo">Mongo</MenuItem>
                <MenuItem value="TypeScript">TypeScript</MenuItem>
            </Select>

            <InputLabel style={{ marginTop: '30px', color: 'white', marginBottom: '10px', fontWeight: 'bolder' }}>Tecnología</InputLabel>
            <Select
                name="tecnologia"
                value={formData.tecnologia}
                label="tecnologia"
                variant="outlined"
                onChange={onSelectChange}
            >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                <MenuItem value="SpringBoot">SpringBoot</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
                <MenuItem value="Mongo">Mongo</MenuItem>
                <MenuItem value="TypeScript">TypeScript</MenuItem>
            </Select>

            <Button style={{ marginTop: '20px', backgroundColor: "#39C5BB", fontWeight: 'bolder' }} type="submit">
                Enviar
            </Button>
        </Box>
    );
}
