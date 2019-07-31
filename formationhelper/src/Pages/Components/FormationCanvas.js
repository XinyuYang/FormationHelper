import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    items: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
  }));

export default function FormationCanvas(){
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <CssBaseline>
                <Container fixed>
                    <Grid className={classes.items} container direction="row" justify="center" alignItems="center">
                        <Grid item><Paper>OffStage</Paper></Grid>
                        <Dot color="#000000"/>
                        <Dot color="#245662"/>
                        <Grid item><Paper>Stage</Paper></Grid>
                        <Grid item><Paper>OffStage</Paper></Grid>

                    </Grid>
                </Container>
            </CssBaseline>
        </React.Fragment>
    );
}