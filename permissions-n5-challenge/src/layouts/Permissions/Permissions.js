import React from "react";
import { Paper, Container } from '@mui/material';
import { PermissionsForm } from "../../components/PermissionsForm";
import { CustomTable } from '../../components/CustomTable';

const Permissions = () => {
    return(
        <>
            <Container>
                <Paper>
                    <PermissionsForm />
                    <CustomTable />
                </Paper>
            </Container>
        </>
    );
};

export default Permissions;