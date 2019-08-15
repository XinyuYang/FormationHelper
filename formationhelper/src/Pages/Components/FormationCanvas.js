import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable'
import Pagination from "material-ui-flat-pagination"


class StageSection extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0 }
    }

    handleClick(offset) {
        this.setState({offset})
    }

    render() {
        return (
            <Grid item xs={10}>
                <div className="Stage" style={{direction:"column", justify:"center", alignItems: "center", position: 'relative'}}>
                    {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                    {/* Dot only works using div */}
                    {Array(this.props.dancer).fill(1).map(() =>
                        <Dot color = {"#000000"} />
                    )}
                </div>

                <div style={{margin:'auto', textAlign: 'center'}}>
                    <h3>This is a placeholder of { this.state.offset + 1 }</h3>
                    <Pagination
                        limit={1}
                        offset={this.state.offset}
                        total={10}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
            </Grid>
        )
    }
}


export default function FormationCanvas(formationInfo){

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
                     <StageSection dancer={formationInfo.dancerNumber}/>
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
