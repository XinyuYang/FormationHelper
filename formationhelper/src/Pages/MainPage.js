import React from 'react';
import SideBar from './Components/SideBar';
import FormationCanvas from './Components/FormationCanvas';
import {Card, Grid, Paper} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import '../css/MainPage.css';
import Header from "./Components/Header";
import MediaControl from "./Components/Music";
import Typography from '@material-ui/core/Typography';

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


function MainPage() {
    const classes = useStyles();

    const currentlyAtWelcome = window.location.pathname == "/";

    return (
        <React.Fragment>
            <Header headerTitle={"Main"}/>
            <SideBar/>
            <Grid className={classes.items} container direction="column"  justify="space-between" alignItems="center">
                <Grid item>
                    <FormationCanvas />
                </Grid>
                <Grid item>
                    <MediaControl />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MainPage;
