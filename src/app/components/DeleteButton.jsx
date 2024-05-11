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
import Alert from '@mui/material/Alert';
import { Portal } from '@mui/base/Portal';

const timeout = 3000;

export default function DeleteButton({ person, action }) {
    const [notificationOpen, setNotificationOpen] = React.useState(false);
    const [notificationMessage, setNotificationMessage] = React.useState("");
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [alertTitle, setAlertTitle] = React.useState("Please confirm");
    const [alertMessage, setAlertMessage] = React.useState("");

    const personDeleteHandler = () => {
        setAlertMessage("Do you really want to delete this person " + person.name + " ?");
        setAlertOpen(true);
    };

    const handleCancel = () => {
        setAlertOpen(false);
    };

    const handleNotificationClose = () => {
        setNotificationOpen(false);
    };

    const handleOK = (person) => {
        if (person === null) {
            console.log("Unexpected null person!");
            return;
        };
        const success = deletePersonById(person.id);
        if (success) {
            setAlertOpen(false);
            setNotificationMessage(person.name + " deleted successfully!");
            setNotificationOpen(true);
            action();
        } else {
            setAlertMessage("Cannot delete " + person.name);
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
            <Portal>
                <Snackbar
                    open={notificationOpen}
                    autoHideDuration={timeout}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    sx={{ position: "absolute" }}
                    onClose={handleNotificationClose}>
                    <Alert
                        onClose={handleNotificationClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notificationMessage}
                    </Alert>
                </Snackbar >
            </Portal>
        </>
    );
}