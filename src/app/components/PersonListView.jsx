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
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import { getPersistentValue, updatePersistentValue, getDefaultValue } from 'utils/Utilities';
import { useNavigate } from 'react-router-dom';
import pageURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import * as action from 'app/constants/actionTypes';

const PAGE_PARAMETER = "PAGE";
const ROWS_PER_PAGE_PARAMETER = "ROWS_PER_PAGE";
const FILTER_PARAMETER = "FILTER";

export default function PersonListView() {
  const [page, setPage] = React.useState(getPersistentValue(PAGE_PARAMETER, 0));
  const [rowsPerPage, setRowsPerPage] = React.useState(getPersistentValue(ROWS_PER_PAGE_PARAMETER, 10));
  const prevFilter = getPersistentValue(FILTER_PARAMETER, {});
  const [filter, setFilter] = React.useState(prevFilter);
  const [data, setData] = React.useState(getPersonData(prevFilter));

  const [personNameStart, setPersonNameStart] = React.useState(getDefaultValue(prevFilter.nameStart, ""));
  const [personNameEnd, setPersonNameEnd] = React.useState(getDefaultValue(prevFilter.nameEnd, ""));
  const [personSex, setPersonSex] = React.useState(getDefaultValue(prevFilter.sex, ""));
  const [personBirthdayStart, setPersonBirthdayStart] = React.useState(getDefaultValue(prevFilter.birthdayStart, ""));
  const [personBirthdayEnd, setPersonBirthdayEnd] = React.useState(getDefaultValue(prevFilter.birthdayEnd, ""));

  const [binPerson, setBinPerson] = React.useState(null);
  const [binAnchor, setBinAnchor] = React.useState(null);

  const navigate = useNavigate();

  const personSelectionHandler = (person) => {
    navigate(`${pageURLs[pages.personEditor]}/${action.VIEW}/${person.id}`);
  }

  const personAddHandler = () => {
    navigate(`${pageURLs[pages.personEditor]}/${action.CREATE}`);
  }

  const clearFilterHandler = () => {
    setPersonNameStart("");
    setPersonNameEnd("");
    setPersonSex("");
    setPersonBirthdayStart("");
    setPersonBirthdayEnd("");
    setFilter(undefined);
    updatePersistentValue(FILTER_PARAMETER, undefined);
    setData(getPersonData(undefined));
  };

  const setFilterHandler = () => {
    const newFilter = {
      nameStart: personNameStart,
      nameEnd: personNameEnd,
      sex: personSex,
      birthdayStart: personBirthdayStart,
      birthdayEnd: personBirthdayEnd
    };
    setFilter(newFilter);
    updatePersistentValue(FILTER_PARAMETER, newFilter);
    setData(getPersonData(newFilter));
  };

  const personBinShowHandler = (event, person) => {
    setBinPerson(person);
    setBinAnchor(event.currentTarget);
  };

  const personBinHideHandler = () => {
    setBinAnchor(null);
  };

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
    updatePersistentValue(PAGE_PARAMETER, newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    const rowsPerPage = event.target.value;
    setRowsPerPage(rowsPerPage);
    setPage(0);
    updatePersistentValue(ROWS_PER_PAGE_PARAMETER, rowsPerPage);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="xl" sx={{ marginTop: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="left">
            <Grid item xs={1}>
              <Fab color="secondary">
                <IconButton onClick={personAddHandler}>
                  <AddIcon />
                </IconButton>
              </Fab>
            </Grid>
            <Grid item xs={1}>
              <Fab color="secondary">
                <IconButton onClick={clearFilterHandler}>
                  <FilterAltOffIcon />
                </IconButton>
              </Fab>
            </Grid>
            <Grid item xs={1}>
              <Fab color="secondary">
                <IconButton onClick={setFilterHandler}>
                  <FilterAltIcon />
                </IconButton>
              </Fab>
            </Grid>
            <Grid item xs="2">
              <InputLabel id="name" size='small'>Name</InputLabel>
              <TextField
                id='name-start-field'
                value={personNameStart}
                size='small'
                label="starting..."
                onChange={(event) => setPersonNameStart(event.target.value)}
              />
              <TextField
                id='name-end-field'
                value={personNameEnd}
                size='small'
                label="...ending"
                onChange={(event) => setPersonNameEnd(event.target.value)}
              />
            </Grid>
            <Grid item xs="1">
              <InputLabel id="sex" size='small'>Sex</InputLabel>
              <Select
                id='sex-selector'
                value={personSex}
                size='small'
                label="Sex"
                onChange={(event) => setPersonSex(event.target.value)}
              >
                <MenuItem key="male" value="MALE" size='small'>Male</MenuItem>
                <MenuItem key="female" value="FEMALE" size='small'>Female</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="2">
              <InputLabel id="birthday" size='small'>Birthday</InputLabel>
              <TextField
                id="birthday-start-field"
                value={personBirthdayStart}
                size='small'
                label="starting..."
                onChange={(event) => setPersonBirthdayStart(event.target.value)}
              />
              <TextField
                id="birthday-finish-field"
                value={personBirthdayEnd}
                size='small'
                label="...ending"
                onChange={(event) => setPersonBirthdayEnd(event.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} alignItems="left">
        <Grid item xs={11}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table sx={{ minWidth: 200 }} size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center" style={{ minWidth: 50 }}>Name</TableCell>
                  <TableCell align="center" style={{ minWidth: 30 }}>Birthday</TableCell>
                  <TableCell align="left" style={{ minWidth: 10 }}>Sex</TableCell>
                  <TableCell align="left" style={{ minWidth: 20 }}>Country of origin</TableCell>
                  <TableCell align="left" style={{ minWidth: 20 }}>Country of citizenship</TableCell>
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
                        onClick={() => personSelectionHandler(person)}
                        onMouseEnter={(event) => personBinShowHandler(event, person)}
                        onMouseLeave={personBinHideHandler}
                      >
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
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 20, 50]}
              colSpan={3}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={pageChangeHandler}
              onRowsPerPageChange={rowsPerPageChangeHandler}
              ActionsComponent={TablePaginationActions}
            />
          </TableContainer>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
      <Popper
        open={binPerson !== null}
        anchorEl={binAnchor}
        placement="right"
        onClose={personBinHideHandler}
        transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Fab color="secondary">
              <DeleteButton person={binPerson} action={() => {
                setBinPerson(null);
                setData(getPersonData(filter));
              }} />
            </Fab>
          </Fade>
        )}
      </Popper>
    </Paper>
  );
}

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
