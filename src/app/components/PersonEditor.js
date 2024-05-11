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
import { savePerson } from 'app/data/persons';
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';
import { Portal } from '@mui/base/Portal';
import { isNameValid, isBirthdayValid, isWeightValid, isHeightValid, isFavoriteMeals } from 'app/data/persons';

const CREATE = "create";
const VIEW = "view";
const EDIT = "edit";

const sexes = [
    { value: "MALE", label: "Male" },
    { value: "FEMALE", label: "Female" }
];

const colors = [
    { value: "GRAY", label: "Gray" },
    { value: "GREEN", label: "Green" },
    { value: "BLUE", label: "Blue" },
    { value: "BLACK", label: "Black" },
    { value: "BROWN", label: "Brown" },
    { value: "RED", label: "Red" },
    { value: "YELLOW", label: "Yellow" }
];

const countries = getAllCountries().map(country => {
    return (
        {
            value: country.name,
            label: country.name
        }
    );
});

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

export default function PersonEditor({ mode, person }) {
    const [currentData, setCurrentData] = React.useState(mode === CREATE ? emptyPerson : person);
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

    const notificationTimeout = 3000;
    const error = false;
    const getInputProperties = () => (currentMode === VIEW) ? { readOnly: true } : { readOnly: false };

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
        setCurrentMode(EDIT);
    };

    const goBackHandler = (event) => {
        //TODO
        alert("Going back");
    };

    const createHandler = (event) => {
        saveHandler(event);
    };

    const saveHandler = (event) => {
        const person = { ...currentData };
        const errorStatus = checkPerson(person);
        setErrorStatus(errorStatus);
        if (containsAnyErrors(errorStatus)) {
            setSaveSeverity("error");
            setSaveNotificationMessage("Incorrect person data!");
            setSaveNotification(true);
            return;
        }
        if (savePerson(person)) {
            setCurrentMode(VIEW);
            setSaveSeverity("success");
            setSaveNotificationMessage("Person updated or added successfully!");
            setSaveNotification(true);
            return;
        }
        setSaveSeverity("error");
        setSaveNotificationMessage("Can't update or add this person!");
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
        setCurrentMode(VIEW);
    };

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
                            label="Name"
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText="Please enter non-blank person's name of length 3 or greater"
                            value={currentData.name}
                            onChange={(event) => setValue(event, "name")}
                            size="small"
                        />
                        <TextField
                            error={errorStatus.birthday}
                            id="birthday"
                            label="Birthday"
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText="Please enter person's birthday from the past in correct format"
                            value={currentData.birthday}
                            onChange={(event) => setValue(event, "birthday")}
                            size="small"
                        />
                        <TextField
                            id="sex"
                            select
                            label="Sex"
                            variant="outlined"
                            required
                            InputProps={getInputProperties()}
                            helperText="Please select person's sex"
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
                            label="Eye color"
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText="Please select person's eye color"
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
                            label="Hair color"
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText="Please select person's hair color"
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
                            label="Weight"
                            variant="outlined"
                            type="number"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            helperText="Please enter person's weight within range 50 to 150 kg"
                            InputProps={{ ...getInputProperties(), shrink: true }}
                            value={currentData.weight}
                            onChange={(event) => setValue(event, "weight")}
                            size="small"
                        />
                        <TextField
                            error={errorStatus.height}
                            id="height"
                            label="Height"
                            variant="outlined"
                            type="number"
                            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                            helperText="Please enter person's height within range 60 to 220 cm"
                            InputProps={{ ...getInputProperties(), shrink: true }}
                            value={currentData.height}
                            onChange={(event) => setValue(event, "height")}
                            size="small"
                        />
                        <TextField
                            id="countryOfOrigin"
                            select
                            label="Country of origin"
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText="Please select person's country of origin"
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
                            label="Country of citizenship"
                            variant="outlined"
                            InputProps={getInputProperties()}
                            helperText="Please select person's country of citizenship"
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
                            label="Favorite Meals"
                            variant="outlined"
                            helperText="Please enter person's non-empty list of favorite meals separated by commas"
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
                        {currentMode === VIEW && (
                            <Fab color="secondary" variant="extended" size="small">
                                <IconButton onClick={startEditingHanlder}>
                                    <ModeEditIcon />
                                </IconButton>
                                Edit
                            </Fab>
                        )}
                        {currentMode === CREATE && (
                            <>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={createHandler}>
                                        <NoteAddIcon />
                                    </IconButton>
                                    Create
                                </Fab>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={goBackHandler}>
                                        <CancelIcon />
                                    </IconButton>
                                    Cancel
                                </Fab>
                            </>
                        )}
                        {currentMode === EDIT && (
                            <>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={saveHandler}>
                                        <SaveIcon />
                                    </IconButton>
                                    Save
                                </Fab>
                                <Fab color="secondary" variant="extended" size="small">
                                    <IconButton onClick={cancelHandler}>
                                        <CancelIcon />
                                    </IconButton>
                                    Cancel
                                </Fab>
                            </>
                        )}
                        <Fab color="secondary" variant="extended" size="small">
                            <IconButton onClick={goBackHandler}>
                                <UndoIcon />
                            </IconButton>
                            Back
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

function checkPerson(person) {
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