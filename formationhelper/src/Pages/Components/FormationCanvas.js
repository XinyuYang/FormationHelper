import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable'


class StageSection extends Component {
    render() {
        return (
            <Grid item xs={10}>
                <div className="Stage" >
                    {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography> Stage </Typography>
                        <Draggable onDrag={this.handleDrag}>
                            <Grid item sm>
                                <Dot color="#000000"/>
                            </Grid>
                        </Draggable>
                    </Grid>
                </div>
            </Grid>
        )
    }
}


export default function FormationCanvas(){

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
                     <StageSection/>
                </div>

                <div className="RightStage">
                    <Typography>Off Stage</Typography>
                </div>

                <div className = "Back" >
                    <Typography>Back</Typography>
                </div>
            </Paper>
        </div>
    );
}
