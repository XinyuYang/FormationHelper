import React, {Component} from 'react';
import WaveSurfer from 'wavesurfer.js';

// .ebee
export default class Wave extends Component {

    componentDidMount() {
        this.wavesurfer = WaveSurfer.create({
            barWidth: 1,
            cursorWidth: 1,
            container: '#waveform',
            backend: 'MediaElement',
            height: 100,
            progressColor: '#3f51b5',
            responsive: true,
            waveColor: '#ccc',
            cursorColor: '#000000',
        });
    }

    componentDidUpdate() {
        const aud = this.props.audio;
        console.log(aud);
        if(aud!==null){
            this.wavesurfer.load(aud);
        }
    }


    render() {
        return (
            <div id="waveform"/>
        );
    }
}
