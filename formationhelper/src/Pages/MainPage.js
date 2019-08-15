import React, {Component} from 'react';
import SideBar from './Components/SideBar';
import FormationCanvas from './Components/FormationCanvas';
import {Card, Grid, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import '../css/MainPage.css';
import Header from "./Components/Header";
import MediaControl from "./Components/Music";
import Typography from '@material-ui/core/Typography';
import Player from "./Components/MusicPlayer/Player";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    items: {
        marginTop: theme.spacing(4),
    },
    Paper: {
        width: '100%',
         padding: 20,
         marginTop:10,
         marginBottom: 10,
     },
}));

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="down" ref={ref} {...props}/>;
  });  

const currentlyAtWelcome = window.location.pathname == "/";


class MainPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            danceName: "Main",
            dancerNumber: 0,
            showInfo: false,
            currDanceName: "",
            currDancerNumber: 0,
        }
        this.showInfoPopover = this.showInfoPopover.bind(this);
        this.changeInfoPopover = this.changeInfoPopover.bind(this);
        this.closeInfoPopover = this.closeInfoPopover.bind(this);
        this.onDanceNameChange = this.onDanceNameChange.bind(this);
        this.onDancerNumberChange = this.onDancerNumberChange.bind(this);
    }

    componentDidMount (){
        this.setState({
            danceName: this.props.location.state.danceName,
            dancerNumber: this.props.location.state.dancerNumber,
            currDanceName: this.props.location.state.danceName,
            currDancerNumber: this.props.location.state.dancerNumber,
        })
    }
    

    showInfoPopover(){
        this.setState({showInfo: true});
    }

    changeInfoPopover(){
        this.setState({
            danceName: this.state.currDanceName,
            dancerNumber: this.state.currDancerNumber,
            showInfo:false,
        });
    }
    
    closeInfoPopover(){
        this.setState({showInfo: false});
    }
    
    onDanceNameChange(e){
        this.setState({currDanceName: e.target.value});
    }
    
    onDancerNumberChange(e){
        this.setState({currDancerNumber: e.target.value});
    }

    render(){
        return (
            <React.Fragment>
                <Header headerTitle={this.state.danceName} infoFunction={this.showInfoPopover}/>
                <SideBar/>
                <Dialog open={this.state.showInfo} TransitionComponent={Transition} keepMounted onClose={this.closeInfoPopover}
                aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
                    <DialogTitle id="alert-dialog-slide-title">{"Change Basic Dance Info"}</DialogTitle>
                     <DialogContent>
                         <DialogContentText id="dance-name-dialog">
                            Dance Name:
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="name" label="Dance Name" type="dance name" value={this.state.currDanceName} 
                                onChange={this.onDanceNameChange} fullWidth/>
                        <DialogContentText id="dancer-number-dialog">
                            Dancer Number:
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="number" label="Dancer Number" type="dancer number" value={this.state.currDancerNumber}
                                   onChange={this.onDancerNumberChange} fullWidth/>
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.changeInfoPopover}>Confirm</Button>
                            <Button onClick={this.closeInfoPopover}>Cancel</Button>
                        </DialogActions>
                </Dialog>
                <Grid className={useStyles.items} container direction="column"  >
                    <Grid item>
                        <FormationCanvas dancerNumber={this.state.dancerNumber}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default MainPage;
