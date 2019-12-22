import React, {Component} from 'react';
import Info from "./Info";
import Controls from "./Controls";
import LoadMusic from "./LoadMusic";
import { getAudioBuffer, getContext } from './Utils';
import {Box, Paper} from '@material-ui/core';
import Wave from "./Wave";

export default class Player extends Component{
    state = {
        audio: null,
        buffer: null,
        context: null,
        MusicLength: 0,
        duration: 0,
    };


    componentWillMount() {
        const context = getContext();
        this.setState({
            context
        });
    }

    handleFile = async event =>{
        const files = event.target.files;
        const file = await window.URL.createObjectURL(files[0]);
        const audio = new Audio(file);
        const musicName = files[0]['name'];
        await this.setState({audio,musicName});

    };

    // getFile = async (path = 'audio/test.mp3') => {
    //     const buffer = await getAudioBuffer(path, this.state.context);
    //     this.setState({ buffer });
    //     const duration = buffer['duration'];
    //     this.setState({duration});
    //     console.log(buffer);
    // };


    onMusicProgress = ()=>{
        // Implement this

    };

    render() {
        return(
            <div className ="player">
                <Info className = "info"
                    musicName={this.state.musicName}
                    artist={this.state.artist}
                />
                <div className = "progress">
                    <Wave className = "wave" audio={this.state.audio} />
                </div>
                <div className = "controls">
                    <Controls  audio={this.state.audio} onMusicProgress={this.onMusicProgress}/>
                    {/*<Time />*/}
                    <LoadMusic className = "loadMusic" onChange={this.handleFile}/>
                </div>
            </div>
        );
    }


}