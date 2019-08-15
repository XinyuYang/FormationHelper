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
                <div className="Stage" style={{direction:"column", justify:"center", alignItems: "center", position: 'relative'}}>
                    {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/
                    /* The Dot is draggable only with <div> ...*/}

                        <Typography> Stage </Typography>
                        <Draggable bounds="parent" >
                            <div><Dot/></div>
                        </Draggable>
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
