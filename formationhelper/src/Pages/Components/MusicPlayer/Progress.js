import React, {Component} from 'react';
import Waveform from 'waveform-react';
import music from '../../../Assets/Musics/Jony J - 喜新恋旧.mp3'


export default class Progress extends Component{
    state = {
        MusicName: null,
        MusicLength: 0,
    };
    render() {
        return(
            <Waveform
                // Audio buffer
                buffer={this.props.buffer}
                // waveform height
                height={75}
                markerStyle={{
                    // Position marker color
                    color: '#000000',
                    // Position marker width (in pixels)
                    width: 4
                }}
                // Optionally handle user manually changing position (0 - 1)
                onPositionChange={pos => console.log(pos)}
                // Wave plot type (line or bar)
                plot="bar"
                // Marker position on waveform (0 - 1)
                position={0.5}
                // redraw waveform on window size change (default: true)
                responsive={false}
                // Show position marker
                showPosition={false}
                waveStyle={{
                    // animate waveform on draw (default: true)
                    animate: true,
                    // waveform color
                    color: '#3f51b5',
                    // width of each rendered point (min: 1, max: 10)
                    pointWidth: 0.75
                }}
                // waveform width
                width={750}
            />
        );
    }
}