import React from 'react';
// import newlogo from './Images/newlogo.png'
import "../css/WelcomePage.css"
import "../css/WelcomePage.css"
import Footer from "./Components/Footer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import Header from "./Components/Header";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    Buttons: {
        marginTop: theme.spacing(4),
    },
}));

export default function WelcomePage() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Header/>
            <div className="App" >
                <div>
                    <h1>Welcome to Formation Helper</h1>
                </div>
                <div>
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                    <p>this is a text this is a text this is a text this is a text this is a text</p >
                </div>
                < img src="http://hochstein.org/portals/0/gottaSingDance%20pic%20for%20web.jpg" width="600px" height="300px"/>
                <div className={classes.Buttons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item >
                            <Button variant="contained"  color="primary" component={Link} to="/main">
                                Create New
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Load Local
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                DownLoad Online
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" component={Link} to="/credit">
                                Credits
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
