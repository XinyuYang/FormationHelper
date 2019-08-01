import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Container, Paper, Grid } from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    items: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    canvas:{
        width : 900,
    },

    direction: {

    },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    },
    stage: {
        height: 500,
        // width: 700,
        // padding: 20,
        // marginTop:10,
        // marginBottom: 10,
    },
    Paper: {
        height: 500,
        textAlign: 'center',
         // padding: 20,
         // marginTop:10,
         // marginBottom: 10,
         // marginLeft: 10,
         // marginRight: 10,
     },
  }));



export default function FormationCanvas(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline>
                <Container  className={classes.canvas} maxWidth='md'>

                    <Grid className={classes.items} container spacing={1}>
                        <Grid item md ={12}>
                            <Paper>
                                <Typography  variant ="h5" align="center">Front</Typography>
                            </Paper>
                        </Grid>

                        <Grid item md={1}><Paper  className={classes.Paper} >OffStage</Paper></Grid>

                        <Grid item md={10}>
                            <Paper className={classes.stage} >
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Typography> Stage </Typography>
                                    <Grid item sm>
                                        <Dot color="#000000"/>
                                        <Dot color="#245662"/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item md={1}><Paper className={classes.Paper}>OffStage</Paper></Grid>

                        <Grid item md = {12} marginTop="theme.spacing{4}">
                            <Paper className = {classes. Direction}>
                                <Typography  variant ="h5" align = "center">Back</Typography>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </CssBaseline>
        </React.Fragment>
    );
}
