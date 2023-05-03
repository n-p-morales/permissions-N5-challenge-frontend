import React from 'react';

import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

const CustomTable = ({data, columns}) => {
    return (
        <TableContainer component = {Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                    {
                        columns ? columns.map((item) => (
                            <TableCell>item</TableCell>
                        )) : <></>
                    }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data ? data.map((row) => {
                            columns.map((column) => (
                                <TableCell>{row[column]}</TableCell>
                            ))
                        }) : <></>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;