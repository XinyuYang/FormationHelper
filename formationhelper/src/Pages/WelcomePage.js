import React, {Component, useState} from 'react';
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

// const [dialogOpen, setDialogOpen] = useState(false);


class WelcomePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false,
            danceName: "",
            dancerNumber: "",
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDanceNameChange = this.onDanceNameChange.bind(this);
        this.onDancerNumberChange = this.onDancerNumberChange.bind(this);
    };
    
    handleClickOpen(){
        this.setState({dialogOpen:true});
    }

    handleClose(){
        this.setState({dialogOpen:false});
    }
    
    onDanceNameChange(e){
        this.setState({danceName: e.target.value});
    }

    onDancerNumberChange(e){
        this.setState({dancerNumber: e.target.value});
    }

    render(){

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
                    <div className={useStyles.Buttons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item >
                                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                                    Create New
                                </Button>
                                <Dialog open={this.state.dialogOpen} TransitionComponent={Transition} keepMounted onClose={this.handleClose}
                                        aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
                                    <DialogTitle id="alert-dialog-slide-title">{"Create New Formation"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            Please write down some basic information before proceeding
                                        </DialogContentText>
                                        <TextField autoFocus margin="dense" id="name" label="Dance Name" type="dance name" 
                                                value={this.state.danceName} onChange={this.onDanceNameChange} fullWidth/>
                                        <TextField autoFocus margin="dense" id="number" label="Number of Dancers" type="dancers number" 
                                                value={this.state.dancerNumber} onChange={this.onDancerNumberChange} fullWideth />

                                    </DialogContent>
                                    <DialogActions>
                                        <Button component={Link} to="/main" 
                                                params={{danceName:this.state.danceName, 
                                                        dancerNumber:this.state.dancerNumber}}>
                                            Confirm
                                        </Button>
                                        <Button onClick={this.handleClose}>
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
}

export default WelcomePage;