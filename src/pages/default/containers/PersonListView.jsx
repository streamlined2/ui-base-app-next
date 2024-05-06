import React from 'react';
import Typography from 'components/Typography';
import { persons } from 'app/data/persons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function PersonListView() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (
    <Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table sx={{ minWidth: 650 }} size="small" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ minWidth: 200 }}>Name</TableCell>
                <TableCell align="center" style={{ minWidth: 50 }}>Birthday</TableCell>
                <TableCell align="left" style={{ minWidth: 30 }}>Sex</TableCell>
                <TableCell align="left" style={{ minWidth: 50 }}>Country of origin</TableCell>
                <TableCell align="left" style={{ minWidth: 50 }}>Country of citizenship</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                persons.
                  slice(page * rowsPerPage, (page + 1) * rowsPerPage).
                  map(person => (
                    <TableRow key={person.id} hover role="checkbox" tabIndex={-1}>
                      <TableCell>{person.name}</TableCell>
                      <TableCell>{person.birthday}</TableCell>
                      <TableCell>{person.sex === 'MALE' ? 'Male' : 'Female'}</TableCell>
                      <TableCell>{person.countryOfOrigin.name}</TableCell>
                      <TableCell>{person.citizenship.name}</TableCell>
                    </TableRow>
                  ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination rowsPerPageOptions={[5, 10, 15, 20, 50]} component="div" count={persons.length} rowsPerPage={rowsPerPage} page={page} onPageChange={(event, newPage) => setPage(newPage)} onRowsPerPageChange={(event) => { setRowsPerPage(event.target.value); setPage(0); }} />
      </Paper>
    </Typography>
  );
}

export default PersonListView;