import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function DeleteButton({ id, name }) {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const personDeleteHandler = (event, personId, personName) => {
        setOpen(true);
        //confirm("Do you want to remove this person " + personName + "?");
        /*
        if (confirmed) {
          const success = deletePersonById(personId);
          if (success) {
          }
        }
        */
    };

    return (
        <>
            <IconButton onClick={(event) => personDeleteHandler(event, id, name)}>
                <DeleteIcon />
            </IconButton>
            <Snackbar
                open={open}
                autoHideDuration="5000"
                onClose={handleClose}
                message={"Person " + name + " deleted successfully!"} />
        </>
    );
}