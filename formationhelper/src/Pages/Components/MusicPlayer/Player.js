import React, {Component} from 'react';
import Info from "./Info";
import Progress from "./Progress";
import Controls from "./Controls";
import LoadMusic from "./LoadMusic";
import {Box, Paper} from '@material-ui/core';

export default class Player extends Component{
    state = {
        musicName: "AAA",
        artist: "Leo Li",
        MusicLength: 0,
    };
    onMusicChange = () =>{
        // Once  button is clicked => update the music information
        this.setState({});
    };
    render() {
        return(
            <div className ="player">
                <Info className = "info"
                    musicName={this.state.musicName}
                    artist={this.state.artist}
                />
                {/*<Progress />*/}
                <div className = "controls">
                    <Controls  />
                    {/*<Time />*/}
                    <LoadMusic className = "loadMusic" onChange={this.onMusicChange}/>
                </div>
            </div>
        );
    }
}