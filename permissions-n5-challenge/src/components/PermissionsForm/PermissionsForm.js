import React from "react";
import { 
    Box,
    TextField,
    InputLabel,
    MenuItem,
    Select,
    FormControl,
    Grid
 } from '@mui/material';

const PermissionsForm = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField 
                            label="Nombre Empleado"
                        />
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                            label="Apellido Empleado"
                        />
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel>Tipo Permiso</InputLabel>
                        <Select>

                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
}

export default PermissionsForm;