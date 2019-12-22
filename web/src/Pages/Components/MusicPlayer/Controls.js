import React, {Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import music from '../../../Assets/Musics/Jony J - 喜新恋旧.mp3'
import Pause from "@material-ui/icons/esm/Pause";

export default class Controls extends Component{
    state = {
        play: false,
        timePlayedSoFar: 0,
    };
    // audio = new Audio(music);
    play = () => {

        this.setState({ play: true});
        this.props.audio != null ?
            this.props.audio.play():
            alert("Please Upload Music First");
    };

    pause = () => {
        this.setState({ play: false});
        this.props.audio != null ?
            this.props.audio.pause():
            alert("Please Upload Music First");
    };
    render() {
        return(
            <div>
                <IconButton aria-label="previous" onClick={this.pause}>
                    <Pause />
                </IconButton>
                <IconButton aria-label="play/pause" onClick={this.play}>
                    <PlayArrowIcon  />
                </IconButton>
            </div>
        );
    }
}