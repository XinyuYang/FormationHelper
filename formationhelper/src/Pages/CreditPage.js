import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from "./Components/Footer";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  Content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  Buttons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
              <Typography variant="h5" align="center" color="textPrimary" paragraph>
                GithubLink: https://github.com/XinyuYang/FormationHelper
              </Typography>
            </Container>
          </div>
        </main>
        <Footer/>
      </React.Fragment>
  );
}