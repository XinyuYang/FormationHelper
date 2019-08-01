import React from 'react';
import "../css/WelcomePage.css"
import "../css/WelcomePage.css"
import Footer from "./Components/Footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles, Dialog} from "@material-ui/core";
import Header from "./Components/Header";
import { Link } from 'react-router-dom';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props}/>;
});

const useStyles = makeStyles(theme => ({
    Buttons: {
        marginTop: theme.spacing(4),
    },
}));

export default function WelcomePage() {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = React.useState(false);

    function handleClickOpen(){
        setDialogOpen(true);
    }

    function handleClose(){
        setDialogOpen(false);
    }

    return(
        <React.Fragment>
            <Header headerTitle={"Welcome to Formation Helper"}/>
            <div className="App" >
                <div>
                    <h1>Welcome to Formation Helper</h1>
                </div>
                <div>
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                </div>
                < img src="http://hochstein.org/portals/0/gottaSingDance%20pic%20for%20web.jpg" width="600px" height="300px"/>
                <div className={classes.Buttons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item >
                            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                                Create New
                            </Button>
                            <Dialog open={dialogOpen} TransitionComponent={Transition} keepMounted onClose={handleClose}
                                    aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
                                <DialogTitle id="alert-dialog-slide-title">{"Create New Formation"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        Please write down some basic information before proceeding
                                    </DialogContentText>
                                    <TextField autoFocus margin="dense" id="name" label="Dance Name" type="dance name" fullWidth/>
                                    <TextField autoFocus margin="dense" id="number" label="Number of Dancers" type="dancers number" fullWideth />

                                </DialogContent>
                                <DialogActions>
                                    <Button component={Link} to="/main">
                                        Confirm
                                    </Button>
                                    <Button onClick={handleClose}>
                                        Cancel
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Load Local
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                DownLoad Online
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" component={Link} to="/credit">
                                Credits
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
