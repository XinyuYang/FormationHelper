import React from 'react';
import SideBar from './Components/SideBar';
import FormationCanvas from './Components/FormationCanvas';
import {Card, Grid, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    items: {
        marginTop: theme.spacing(4),
    },
}));


function MainPage() {
    const classes = useStyles();

    return (
        <div>
            <SideBar/>
            <Grid className={classes.items} container direction="column" justify="center" alignItems="center">
                <Grid item><Paper>Front</Paper></Grid>
                <Grid item><FormationCanvas /></Grid>
                <Grid item marginTop="theme.spacing{4}"><Paper>Back</Paper></Grid>
            </Grid>
        </div>
    );
}

export default MainPage;