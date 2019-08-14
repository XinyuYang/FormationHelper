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
  }));



export default function FormationCanvas(){
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline>
                <Container  className="Canvas" >

                    <Grid className={classes.items} container spacing={1}>
                        <Grid item xs ={12}>
                            <Paper className="Direction">
                                <Typography  variant ="h5" align="center">Front</Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={1}><Paper  className="Paper" >OffStage</Paper></Grid>

                        <Grid item xs={10}>
                            <Paper className="Stage" >
                                {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                                <Grid container direction="column" justify="center" alignItems="center">
                                    <Typography> Stage </Typography>
                                    <Grid item sm>
                                        <Dot color="#000000"/>
                                        <Dot color="#245662"/>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={1}>
                            <Paper className="Paper">OffStage</Paper>
                        </Grid>

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
