import React, {Component} from 'react';
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

const currentlyAtWelcome = window.location.pathname == "/";

class MainPage extends Component{

    constructor(props){
        super(props);
        this.state={
            danceName: "Main",
        }
    }

    componentDidMount (){
        this.setState({
            danceName: this.props.location.state.danceName,
            // danceName: "He",
        })
    }

    render(){
        return (
            <React.Fragment>
                <Header headerTitle={this.state.danceName}/>
                <SideBar/>
                <Grid className={useStyles.items} container direction="column"  justify="space-between" alignItems="center">
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
}

export default MainPage;
