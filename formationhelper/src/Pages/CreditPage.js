import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Components/Footer";
import { FaGithub } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles(theme => ({
  Content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));



export default function CreditPage() {
  const classes = useStyles();
  return (
      <React.Fragment>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Credit Page
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Main Unit */}
          <div className={classes.Content}>
            <Container maxWidth="md">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Contributor:
              </Typography>
              <Typography variant="h5" align="center" color="textPrimary" paragraph gutterBottom>
                Xinyu Yang, Yuren Pang, Yuhan Chen, Yuxiang Chen
              </Typography>
              <Grid container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center">
                <Grid item>
                  <FaGithub size={40} />
                </Grid>
                <Grid>
                  <Typography variant="h5" align="center" color="textPrimary" paragraph>
                    github.com/XinyuYang/FormationHelper
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
        <Footer/>
      </React.Fragment>
  );
}