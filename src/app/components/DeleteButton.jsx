import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deletePersonById } from 'app/data/persons';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteButton({ person, action }) {
    const timeout = 3000;

    const [notificationOpen, setNotificationOpen] = React.useState(false);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [alertTitle, setAlertTitle] = React.useState("Please confirm");
    const [alertMessage, setAlertMessage] = React.useState("Do you really want to delete this person " + person.name + " ?");

    const personDeleteHandler = () => {
        setAlertOpen(true);
    };

    const handleCancel = () => {
        setAlertOpen(false);
    };

    const handleOK = (person) => {
        if (person === null) return;
        const success = deletePersonById(person.id);
        if (success) {
            setAlertOpen(false);
            setNotificationOpen(true);
            action();
        } else {
            setAlertMessage("Cannot delete this person.");
            setAlertTitle("Deletion failed!");
        }
    };

    return (
        <>
            <IconButton onClick={personDeleteHandler}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={alertOpen}
                onClose={handleCancel}
            >
                <DialogTitle>{alertTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{alertMessage}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleOK(person)} autoFocus>OK</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={notificationOpen}
                autoHideDuration={timeout}
                onClose={() => setNotificationOpen(false)}
                message={"Person " + person.name + " deleted successfully!"} />
        </>
    );
}