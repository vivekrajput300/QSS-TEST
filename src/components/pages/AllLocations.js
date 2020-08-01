import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { addLocation } from '../../helpers/routes';

const columns = [
    { id: 'locationName', label: 'Location Name', minWidth: 170 },
    { id: 'address', label: 'Address', minWidth: 100 },
    {
        id: 'phoneNo',
        label: 'Phone No.',
        minWidth: 170,
        align: 'right',
        format: (value) => {
            let cleaned = ('' + value).replace(/\D/g, '');
            let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
            if (match) {
                return '(' + match[1] + ') ' + match[2] + '-' + match[3]
            };
            return null;
        }
    },
    {
        id: 'action',
        label: '',
        minWidth: 170,
        align: 'right'
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    container: {
        maxHeight: 440,
    },
}));

function LocationTable(props) {
    const rows = props.locations;
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const moveToAddLocation = () => {
        props.history.replace(addLocation);
    }

    return (
        <>
            <div className={classes.root}>
                <Button variant="contained" className='addLocation' color="primary" onClick={moveToAddLocation}>+ Add Location</Button>
            </div>
            {
                rows.length ?
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number' ? column.format(value) : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 50]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                    :
                    <div className="centered">
                        <h3>Kindly Add Your Location First</h3>
                        <p>There is no location added right now.</p>
                    </div>
            }
        </>
    );
}

const mapStateToProps = state => ({ 'locations': state.location.locations });

export default connect(mapStateToProps)(LocationTable);
