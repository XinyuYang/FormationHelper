import React from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'

class WaveForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        const { audioFileURL } = this.props

        this.$waveform = this.waveContainer.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: '#2a4eec40',
            progressColor: '#2a4eec',
            height: 40,
            cursorWidth: 0
        })

        this.wavesurfer.load(audioFileURL)
        this.wavesurfer.on('ready', this.waveSuferInit)
    }

    componentDidUpdate(prevProps, prevState) {
        const { audioFileURL } = this.props

        if (prevProps.audioFileURL !== audioFileURL) {
            this.wavesurfer.load(audioFileURL)
            this.wavesurfer.on('ready', this.waveSuferInit)
        } else {
            this.waveSuferInit()
        }
    }

    waveSuferInit = () => {
        const { volume, playing } = this.props

        if (volume) {
            this.wavesurfer.setVolume(volume)
        }

        if (playing) {
            this.wavesurfer.play()
        }
    }

    render() {
        return (
            <div ref={node => { this.waveContainer = node }}>
                <div className='wave' />
            </div>
        )
    }
}

WaveForm.propTypes = {
    audioFileURL: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired,
    playing: PropTypes.bool.isRequired
}

export default WaveForm