import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable'

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    items: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
  }));


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
                <Paper className="Stage" >
                    {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography> Stage </Typography>
                        {Array(this.state.number).fill(1).map(() =>
                            <Dot color = {"#000000"} />
                            )}
                    </Grid>
                </Paper>
            </Grid>
        )
    }
}



export default function FormationCanvas(formationInfo){
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline>
                <Container  className="Canvas" >
                    <Grid className={classes.items} container spacing={1}>
                        {/*top section*/}
                        <Grid item xs ={12}>
                            <Paper className="Direction">
                                <Typography  variant ="h5" align="center">Front</Typography>
                            </Paper>
                        </Grid>

                        {/*left section*/}
                        <Grid item xs={1}><Paper  className="Paper" >OffStage</Paper></Grid>

                        <StageSection number={formationInfo.dancerNumber}/>

                        {/*right section*/}
                        <Grid item xs={1}>
                            <Paper className="Paper">OffStage</Paper>
                        </Grid>

                        {/*bottom section*/}
                        <Grid item xs = {12} marginTop="theme.spacing{4}">
                            <Paper className = "Direction">
                                <Typography  variant ="h5" align = "center">Back</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </CssBaseline>
        </React.Fragment>
    );
}
