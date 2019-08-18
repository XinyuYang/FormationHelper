import React, {Component} from "react";
import {Circle} from "react-shapes";
import Draggable from 'react-draggable';
import { Slide, Dialog, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="up" ref={ref} {...props}/>;
});

class Dot extends Component{
    constructor(props){
        super(props);
        this.state = {
            dancerName : "Dancer Name",
            dialogOpen: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen(){
        this.setState({dialogOpen:true});
    }

    handleClose(){
        this.setState({dialogOpen:false});
    }

    onDancerNameChange(e){
        this.setState({dancerName: e.target.value});
    }

    render(){
        const color = this.props.color; //currently not working
        const name = this.props.name;
        return(
            <Draggable bounds="parent">
                <div onDoubleClick={this.handleClickOpen}>
                    <h4>{name}</h4>
                    <Circle r={10} fill={{color:color}} stroke={{color:color}} strokeWidth={0}/>

                    <Dialog open={this.state.dialogOpen} TransitionComponent={Transition} keepMounted onClose={this.handleClose}
                            aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description" >
                        <DialogTitle id="alert-dialog-slide-title">{"Create New Formation"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                This is the dot's information
                            </DialogContentText>
                            <TextField autoFocus margin="dense" id="name" label="Dance Name" type="dance name"
                                       value={this.state.danceName} onChange={this.onDancerNameChange} fullWidth/>

                            {/*Add more options*/}
                        </DialogContent>
                    </Dialog>
                </div>
            </Draggable>
        )
    }
}


export default Dot;