import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// MUI components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useClientStore } from '../../hooks/useClientStore';
import { usePagination } from '../../hooks/usePagination';

/**
 * Table to be used with Hook data fetching - Additional functionality
 *
 * Features:
 *   -  Sorting
 *   -  Filtering
 *   -  Pagination
 *   -  Sorting
 *
 * @param {*} hook MongoDBHook to be used
 * @returns
 */
export const MaterialUITable = () => {
    // Data retrieval
    const {
        clients: data,
        isLoading,
        fields: columns,
        startGetClients,
    } = useClientStore();

    console.log(data);

    // Pagination
    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
        usePagination(10);

    useEffect(() => {
        startGetClients();
    }, []);

    return (
        <div>
            {JSON.stringify({ data, isLoading })}
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((header) => {
                                return (
                                    <TableCell key={header}>{header}</TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Iterate over the data */}
                        {data.map((dataRow) => {
                            <TableEntry dataRow={ dataRow }/>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

const TableEntry = ({dataRow}) => {
    return (<TableRow
        key={dataRow.id}
        sx={{
            '&:last-child td, &:last-child th': {
                border: 0,
            },
        }}
    >
        {/* Iterate over entry */}
        {Object.entries(dataRow).map(([key, value]) => {
            console.log()
            console.log(value)
            return (
                <TableCell
                    key={key}
                    // component="th"
                    // scope="row"
                >
                    {value}
                </TableCell>
            );
        })}
    </TableRow>)
}
MaterialUITable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    columns: PropTypes.arrayOf(PropTypes.string),
};
