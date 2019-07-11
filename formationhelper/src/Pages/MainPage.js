import React from 'react';
<<<<<<< HEAD
import SideBar from './Components/SideBar';
import FormationCanvas from './Components/FormationCanvas';
import {Card, Grid, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
=======
import '../css/MainPage.css';
>>>>>>> d55d8994cb79f1d272f2a1d5ad9342cd43bacd17

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