import React, {Component} from 'react';
import Info from "./Info";
import Progress from "./Progress";
import Controls from "./Controls";
import LoadMusic from "./LoadMusic";
import { getAudioBuffer, getContext } from './Utils';
import {Box, Paper} from '@material-ui/core';

export default class Player extends Component{
    state = {
        audio: null,
        buffer: null,
        context: null,
        musicName: "AAA",
        artist: "Leo Li",
        MusicLength: 0,
    };

    componentWillMount() {
        const context = getContext();
        this.setState({
            context
        });
    }

    handleFile = event =>{
        const files = event.target.files;
        const file = window.URL.createObjectURL(files[0]);
        this.getFile(file);
        const audio = new Audio(file);
        this.setState({audio});
    };

    getFile = async (path = 'audio/test.mp3') => {
        const buffer = await getAudioBuffer(path, this.state.context);
        this.setState({ buffer });
    };

    render() {
        return(
            <div className ="player">
                <Info className = "info"
                    musicName={this.state.musicName}
                    artist={this.state.artist}
                />
                <div className = "progress">
                    <Progress buffer={this.state.buffer} />
                </div>
                <div className = "controls">
                    <Controls  audio={this.state.audio}/>
                    {/*<Time />*/}
                    <LoadMusic className = "loadMusic" onChange={this.handleFile}/>
                </div>
            </div>
        );
    }


}