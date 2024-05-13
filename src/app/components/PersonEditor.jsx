import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { getCountryByName, getAllCountries } from 'app/data/countries';
import { Container } from '@mui/material';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import UndoIcon from '@mui/icons-material/Undo';
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { getPersonById, savePerson } from 'app/data/persons';
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';
import { Portal } from '@mui/base/Portal';
import { isNameValid, isBirthdayValid, isWeightValid, isHeightValid, isFavoriteMeals } from 'app/data/persons';
import * as action from 'app/constants/actionTypes';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import pageURLs from 'constants/pagesURLs';
import * as pages from 'constants/pages';
import { useIntl } from 'react-intl';

const emptyPerson = {
    name: "",
    birthday: "",
    sex: "",
    eyeColor: "",
    hairColor: "",
    weight: 0,
    height: 0,
    countryOfOrigin: "",
    citizenship: "",
    favoriteMeals: ""
};

export default function PersonEditor() {
    const params = useParams();
    const mode = params.mode;
    const person = (mode === action.CREATE) ? emptyPerson : getPersonById(Number(params.personId));

    const [currentData, setCurrentData] = React.useState(person);
    const [previousData, setPreviousData] = React.useState(person);
    const [currentMode, setCurrentMode] = React.useState(mode);
    const [saveNotification, setSaveNotification] = React.useState(false);
    const [saveNotificationMessage, setSaveNotificationMessage] = React.useState("");
    const [saveSeverity, setSaveSeverity] = React.useState("success");
    const [errorStatus, setErrorStatus] = React.useState({
        name: false,
        birthday: false,
        weight: false,
        height: false,
        favoriteMeals: false
    });

    const { formatMessage } = useIntl();

    const notificationTimeout = 3000;
    const error = false;
    const getInputProperties = () => (currentMode === action.VIEW) ? { readOnly: true } : { readOnly: false };

    const handleSaveNotificationClose = () => {
        setSaveNotification(false);
    }

    const setValue = (event, property) => {
        const updatedData = (
            {
                ...currentData
            }
        );
        updatedData[property] = event.target.value;
        setPreviousData(currentData);
        setCurrentData(updatedData);
    };

    const setCountry = (event, property) => {
        const updatedData = (
            {
                ...currentData
            }
        );
        const countryName = event.target.value;
        updatedData[property] = getCountryByName(countryName);
        setPreviousData(currentData);
        setCurrentData(updatedData);
    };

    const startEditingHanlder = (event) => {
        setCurrentMode(action.EDIT);
    };

    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(`${pageURLs[pages.personListView]}`);
    };

    const createHandler = (event) => {
        saveHandler(event);
    };

    const saveHandler = (event) => {
        const person = { ...currentData };
        const errorStatus = getErrorStatus(person);
        setErrorStatus(errorStatus);
        if (containsAnyErrors(errorStatus)) {
            setSaveSeverity("error");
            setSaveNotificationMessage(formatMessage({ id: "person.save.notification.incorrect-data" }));
            setSaveNotification(true);
            return;
        }
        if (savePerson(person)) {
            setCurrentMode(action.VIEW);
            setSaveSeverity("success");
            setSaveNotificationMessage(formatMessage({ id: "person.save.notification.success" }));
            setSaveNotification(true);
            return;
        }
        setSaveSeverity("error");
        setSaveNotificationMessage(formatMessage({ id: "person.save.notification.fail" }));
        setSaveNotification(true);
    };

    const cancelHandler = (event) => {
        setCurrentData({ ...previousData });
        setErrorStatus({
            name: false,
            birthday: false,
            weight: false,
            height: false,
            favoriteMeals: false
        });
        setCurrentMode(action.VIEW);
    };

    const sexes = [
        { value: "MALE", label: formatMessage({ id: "filter.parameter.sex.male" }) },
        { value: "FEMALE", label: formatMessage({ id: "filter.parameter.sex.female" }) }
    ];

    const colors = [
        { value: "GRAY", label: formatMessage({ id: "color.gray" }) },
        { value: "GREEN", label: formatMessage({ id: "color.green" }) },
        { value: "BLUE", label: formatMessage({ id: "color.blue" }) },
        { value: "BLACK", label: formatMessage({ id: "color.black" }) },
        { value: "BROWN", label: formatMessage({ id: "color.brown" }) },
        { value: "RED", label: formatMessage({ id: "color.red" }) },
        { value: "YELLOW", label: formatMessage({ id: "color.yellow" }) }
    ];

    const countries = getAllCountries().map(country => {
        return (
            {
                value: country.name,
                label: country.name
            }
        );
    });

    return (
        <>
            <Container
                sx={{
                    margin: 2,
                    width: 900,
                    height: 400
                }}
            >
                <Grid container rowSpacing={1} columnSpacing={20} alignItems="left">
                    <Grid item xs={10}>
                        <TextField
                            error={errorStatus.name}
                            id="name"
                            label={formatMessage({ id: "filter.parameter.name" })}
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.name" })}
                            value={currentData.name}
                            onChange={(event) => setValue(event, "name")}
                            size="small"
                        />
                        <TextField
                            error={errorStatus.birthday}
                            id="birthday"
                            label={formatMessage({ id: "filter.parameter.birthday" })}
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.birthday" })}
                            value={currentData.birthday}
                            onChange={(event) => setValue(event, "birthday")}
                            size="small"
                        />
                        <TextField
                            id="sex"
                            select
                            label={formatMessage({ id: "filter.parameter.sex" })}
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.sex" })}
                            value={currentData.sex}
                            onChange={(event) => setValue(event, "sex")}
                            size="small"
                        >
                            {
                                sexes.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            id="eyeColor"
                            select
                            label={formatMessage({ id: "filter.parameter.eyeColor" })}
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.eyeColor" })}
                            value={currentData.eyeColor}
                            onChange={(event) => setValue(event, "eyeColor")}
                            size="small"
                        >
                            {
                                colors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            id="hairColor"
                            select
                            label={formatMessage({ id: "filter.parameter.hairColor" })}
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.hairColor" })}
                            value={currentData.hairColor}
                            onChange={(event) => setValue(event, "hairColor")}
                            size="small"
                        >
                            {
                                colors.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            error={errorStatus.weight}
                            id="weight"
                            label={formatMessage({ id: "filter.parameter.weight" })}
                            variant="outlined"
                            type="number"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            helperText={formatMessage({ id: "helpertext.weight" })}
                            InputProps={{ ...getInputProperties(), shrink: true }}
                            value={currentData.weight}
                            onChange={(event) => setValue(event, "weight")}
                            size="small"
                        />
                        <TextField
                            error={errorStatus.height}
                            id="height"
                            label={formatMessage({ id: "filter.parameter.height" })}
                            variant="outlined"
                            type="number"
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            helperText={formatMessage({ id: "helpertext.height" })}
                            InputProps={{ ...getInputProperties(), shrink: true }}
                            value={currentData.height}
                            onChange={(event) => setValue(event, "height")}
                            size="small"
                        />
                        <TextField
                            id="countryOfOrigin"
                            select
                            label={formatMessage({ id: "filter.parameter.countryOfOrigin" })}
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.countryOfOrigin" })}
                            value={currentData.countryOfOrigin.name}
                            onChange={(event) => setCountry(event, "countryOfOrigin")}
                            size="small"
                        >
                            {
                                countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            id="citizenship"
                            select
                            label={formatMessage({ id: "filter.parameter.citizenship" })}
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText={formatMessage({ id: "helpertext.citizenship" })}
                            value={currentData.citizenship.name}
                            onChange={(event) => setCountry(event, "citizenship")}
                            size="small"
                        >
                            {
                                countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField
                            error={errorStatus.favoriteMeals}
                            id="favoriteMeals"
                            label={formatMessage({ id: "filter.parameter.favoriteMeals" })}
                            variant="outlined"
                            helperText={formatMessage({ id: "helpertext.favoriteMeals" })}
                            InputProps={getInputProperties()}
                            multiline
                            minRows={4}
                            maxRows={8}
                            value={currentData.favoriteMeals}
                            onChange={(event) => setValue(event, "favoriteMeals")}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        {currentMode === action.VIEW && (
                            <Fab color="secondary" variant="extended" size="small">
                                <IconButton onClick={startEditingHanlder}>
                                    <ModeEditIcon />
                                </IconButton>
                                {formatMessage({ id: "button.person.edit" })}
                            </Fab>
                        )}
                        {currentMode === action.CREATE && (
                            <>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={createHandler}>
                                        <NoteAddIcon />
                                    </IconButton>
                                    {formatMessage({ id: "button.person.create" })}
                                </Fab>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={goBackHandler}>
                                        <CancelIcon />
                                    </IconButton>
                                    {formatMessage({ id: "button.person.cancel" })}
                                </Fab>
                            </>
                        )}
                        {currentMode === action.EDIT && (
                            <>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={saveHandler}>
                                        <SaveIcon />
                                    </IconButton>
                                    {formatMessage({ id: "button.person.save" })}
                                </Fab>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={cancelHandler}>
                                        <CancelIcon />
                                    </IconButton>
                                    {formatMessage({ id: "button.person.cancel" })}
                                </Fab>
                            </>
                        )}
                        <Fab color="secondary" variant="extended" size="small">
                            <IconButton onClick={goBackHandler}>
                                <UndoIcon />
                            </IconButton>
                            {formatMessage({ id: "button.person.back" })}
                        </Fab>
                    </Grid>
                </Grid>
                <Portal>
                    <Snackbar
                        open={saveNotification}
                        autoHideDuration={notificationTimeout}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                        sx={{ position: "absolute" }}
                        onClose={handleSaveNotificationClose}>
                        <Alert
                            onClose={handleSaveNotificationClose}
                            severity={saveSeverity}
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            {saveNotificationMessage}
                        </Alert>
                    </Snackbar >
                </Portal>
            </Container >
        </>
    );
}

function getErrorStatus(person) {
    return (
        {
            name: !isNameValid(person.name),
            birthday: !isBirthdayValid(person.birthday),
            weight: !isWeightValid(person.weight),
            height: !isHeightValid(person.height),
            favoriteMeals: !isFavoriteMeals(person.favoriteMeals)
        }
    );
}

function containsAnyErrors(errorStatus) {
    return errorStatus.name || errorStatus.birthday || errorStatus.weight || errorStatus.height || errorStatus.favoriteMeals;
}