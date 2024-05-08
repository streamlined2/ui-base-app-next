import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { getPersonData } from 'app/data/persons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import DeleteButton from 'app/components/DeleteButton';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { Container, Grid, TextField, Select, InputLabel, MenuItem } from '@mui/material';

function TablePaginationActions({ count, page, rowsPerPage, onPageChange }) {
  const theme = useTheme();

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={(event) => {
          onPageChange(event, 0);
        }}
        disabled={page === 0}
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={(event) => {
          onPageChange(event, page - 1);
        }}
        disabled={page === 0}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={(event) => {
          onPageChange(event, page + 1);
        }}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={(event) => {
          onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        }}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function PersonListView() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState(getPersonData());
  const [filter, setFilter] = React.useState({});

  const personSelectionHandler = (personId) => {
    //alert("Person " + personId + " selected!");
    //TODO redirect to user details window in view mode
  }

  const personAddHandler = (personId) => {
    alert("Person " + personId + " added!");
    //TODO redirect to user details window in create mode
  }

  const personBinShowHandler = (personId) => {
  };

  const updatePersonData = () => {
    setData(getPersonData());
  }

  const clearFilterHandler = () => {
    setFilter({});
  };

  const setFilterHandler = () => {
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ marginTop: 1 }}>
        <Grid container xs={12} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="left">
          <Grid item xs={1}>
            <IconButton onClick={personAddHandler}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={clearFilterHandler}>
              <FilterAltOffIcon />
            </IconButton>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={setFilterHandler}>
              <FilterAltIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <InputLabel id="name" size='small'>Name</InputLabel>
            <TextField size='small'
              labelId="name"
              label="Name"
            />
          </Grid>
          <Grid item xs={1}>
            <InputLabel id="sex" size='small'>Sex</InputLabel>
            <Select size='small'
              labelId="sex"
              label="Sex"
            >
              <MenuItem value="MALE" size='small'>Male</MenuItem>
              <MenuItem value="FEMALE" size='small'>Female</MenuItem>
            </Select>
          </Grid>
          <Grid container xs={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="left">
            <Grid item>
              <InputLabel id="birthday" size='small'>Birthday</InputLabel>
              <TextField size='small'
                id="birthday-start"
                label="starting..."
              />
              <TextField size='small'
                id="birthday-finish"
                label="...until"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
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
              data.slice(page * rowsPerPage, (page + 1) * rowsPerPage).
                map(person => (
                  <TableRow
                    key={person.id}
                    hover role="checkbox"
                    tabIndex={-1}
                    onClick={(event) => personSelectionHandler(event, person.id)}
                    onMouseEnter={(event) => personBinShowHandler(event, person.id)}
                  >
                    <TableCell>{person.name}</TableCell>
                    <TableCell>{person.birthday}</TableCell>
                    <TableCell>{person.sex === 'MALE' ? 'Male' : 'Female'}</TableCell>
                    <TableCell>{person.countryOfOrigin.name}</TableCell>
                    <TableCell>{person.citizenship.name}</TableCell>
                    <TableCell>
                      <DeleteButton id={person.id} name={person.name} action={updatePersonData} />
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, 20, 50]}
          colSpan={3}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => { setRowsPerPage(event.target.value); setPage(0); }}
          ActionsComponent={TablePaginationActions}
        />
      </TableContainer>
    </Paper>
  );
}
