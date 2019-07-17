import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default (headerInfo) => {
    const classes = useStyles();

    const currentlyAtWelcome = window.location.pathname == "/";

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {!currentlyAtWelcome && (
                        <IconButton edge="start" color='inherit' className={classes.menuButton} component={Link} to="/">
                            <ArrowBack/>
                        </IconButton>
                    )}
                    
                    <Typography variant="h6" className={classes.title}>
                        {headerInfo.headerTitle}
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}