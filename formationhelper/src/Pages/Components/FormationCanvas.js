import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable'


class StageSection extends Component {

    constructor(props){
        super(props);
        this.state = {
            number: 4,
        }
    }


    render() {
        return (
            <Grid item xs={10}>
                <div className="Stage" >
                    {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography> Stage </Typography>
                        {Array(this.state.number).fill(1).map(() =>
                            <Dot color = {"#000000"} />
                            )}
                    </Grid>
                </div>
            </Grid>
        )
    }
}



export default function FormationCanvas(formationInfo){
    const classes = useStyles();

    return (
        <div className="root">
            <Paper className="Canvas" >
                <div className="Front" >
                    <Typography>Front</Typography>
                </div>

                <div className="LeftStage">
                    <Typography>Off Stage</Typography>
                </div>

                <div className="Stage">
                    <StageSection number={formationInfo.dancerNumber}/>
                </div>

                <div className="RightStage">
                    <Typography>Off Stage</Typography>
                </div>

                <div className = "Back" >
                    <Typography>Back</Typography>
                </div>
            </Paper>
        </div>
    )
}