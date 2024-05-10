import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { countries as countryList } from 'app/data/countries';

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

const countries = countryList.map(country => {
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

    const error = false;
    const inputProps = (mode === VIEW) ? { readOnly: true } : { readOnly: false };

    const setValue = (event) => {
        const property = event.target.name;
        const updatedData = (
            {
                ...currentData
            }
        );
        updatedData[property] = event.target.value;
        setCurrentData(updatedData);
    };

    return (
        <>
            <Box component="form" noValidate autoComplete='off'>
                <TextField
                    id="name"
                    label="Name"
                    variant="outlined"
                    required
                    InputProps={inputProps}
                    helperText="Please enter person's name"
                    value={currentData.name}
                    onChange={setValue}
                    size="small"
                />

                <TextField
                    id="birthday"
                    label="Birthday"
                    variant="outlined"
                    required
                    InputProps={inputProps}
                    helperText="Please enter person's birthday"
                    value={currentData.birthday}
                    onChange={setValue}
                    size="small"
                />

                <TextField
                    id="sex"
                    select
                    label="Sex"
                    variant="outlined"
                    required
                    InputProps={inputProps}
                    helperText="Please select person's sex"
                    value={currentData.sex}
                    onChange={setValue}
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
                    InputProps={inputProps}
                    helperText="Please select person's eye color"
                    value={currentData.eyeColor}
                    onChange={setValue}
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
                    InputProps={inputProps}
                    helperText="Please select person's hair color"
                    value={currentData.hairColor}
                    onChange={setValue}
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
                    id="weight"
                    label="Weight"
                    variant="outlined"
                    type="number"
                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                    helperText="Please enter person's weight"
                    InputProps={{ ...inputProps, shrink: true }}
                    value={currentData.weight}
                    onChange={setValue}
                    size="small"
                />

                <TextField
                    id="height"
                    label="Height"
                    variant="outlined"
                    type="number"
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    helperText="Please enter person's height"
                    InputProps={{ ...inputProps, shrink: true }}
                    value={currentData.height}
                    onChange={setValue}
                    size="small"
                />

                <TextField
                    id="countryOfOrigin"
                    select
                    label="Country of origin"
                    variant="outlined"
                    InputProps={inputProps}
                    helperText="Please select person's country of origin"
                    value={currentData.countryOfOrigin.name}
                    onChange={setValue}
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
                    InputProps={inputProps}
                    helperText="Please select person's country of citizenship"
                    value={currentData.citizenship.name}
                    onChange={setValue}
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
                    id="favoriteMeals"
                    label="Favorite Meals"
                    variant="outlined"
                    helperText="Please enter person's favorite meals"
                    InputProps={inputProps}
                    multiline
                    maxRows={4}
                    value={currentData.favoriteMeals}
                    onChange={setValue}
                    size="small"
                />

            </Box>
        </>
    );
}