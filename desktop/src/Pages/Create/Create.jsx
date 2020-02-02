import React from 'react'
import Draggable from 'react-draggable'
import './Create.scss'
import { Music, Play, Volume2, ZoomIn, ZoomOut, RotateCw, Plus } from 'react-feather'
import WaveForm from '../../components/WaveForm/WaveForm'


const startingFrame = {
    name: 'New Formation Frame',
    dots: [
        { x: 100, y: 100 },
        { x: 150, y: 100 },
        { x: 200, y: 100 },
        { x: 250, y: 100 },
        { x: 300, y: 100 },
        { x: 350, y: 100 },
    ]
}

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj))

class CreatePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Red Velvet - Psycho Choreo',
            viewingFrame: 0,
            isStageRotated: false,
            frames: [deepCopy(startingFrame)],
            uploadedAudio: undefined,
        }
    }

    rotateStage = () => this.setState((prevState) => ({
        isStageRotated: !prevState.isStageRotated
    }))

    addFormationFrame = () => this.setState((prevState) => {
        prevState.frames.push(deepCopy(startingFrame))
        return { frames: prevState.frames }
    })

    handleDrag = (dotIndex, data) => this.setState((prevState) => {
        const { frames } = prevState
        frames[prevState.viewingFrame].dots[dotIndex] = { x: data.x, y: data.y }
        return { frames: prevState.frames }
    })

    uploadMusic = (event) => this.setState({
        uploadedAudio: URL.createObjectURL(event.target.files[0])
    })

    render() {

        const { name, frames, viewingFrame, isStageRotated, uploadedAudio } = this.state

        return (
            <div className="create" >
                <div className="create__formations">
                    <div className="create__formations__title">{name}</div>
                    {frames.map((frame, frameIndex) =>
                        /* eslint-disable jsx-a11y/click-events-have-key-events */
                        <div
                            role="button"
                            className="create__formations__formation"
                            key={frame.name}
                            tabIndex={0}
                            onClick={() => this.setState({ viewingFrame: frameIndex })}>
                            {frame.name}
                            {frame.dots.map((dot) =>
                                <span
                                    key={`dot-${dot.x}-${dot.y}`}
                                    style={{ top: dot.y / 4, left: dot.x / 4 }}
                                    className="create__formations__formation-dot" />)}
                        </div>
                    )}
                    <button
                        type="button"
                        className="create__formations__add-formation"
                        onClick={this.addFormationFrame}>
                        <Plus size={24} />
                    </button>
                </div>
                <div className="create__editor">
                    <div className="create__editor__nav">
                        <div>Formation Frame #1</div>
                        <button className="primary-light-button" type="button" onClick={this.rotateStage}>
                            <RotateCw size={12} />
                        </button>
                    </div>
                    <div className={isStageRotated ? 'create__editor__stage--rotated' : 'create__editor__stage'}>
                        <div className="create__editor__stage__left">Offstage</div>
                        <div className="create__editor__stage__right">Offstage</div>
                        <div className="create__editor__stage__back">Offstage</div>
                        {frames[viewingFrame].dots.map((dot, index) =>
                            <Draggable
                                bounds="parent"
                                position={{ x: dot.x, y: dot.y }}
                                onDrag={(evt, data) => this.handleDrag(index, data)}>
                                <div className="create__editor__stage__dancer" />
                            </Draggable>
                        )}
                    </div>
                </div>
                <div className="create__timeline">
                    <div className="create__timeline-nav">
                        <div className="create__timeline-nav__edit-buttons">
                            <label htmlFor="music" className="primary-light-button" type="button">
                                <Music size={12} /> Upload
                            </label>
                            <input
                                id="music"
                                type="file"
                                multiple={false}
                                accept="audio/*"
                                onChange={this.uploadMusic} />
                            <button className="primary-light-button" type="button">
                                <Play size={12} />
                            </button>
                            <button className="primary-light-button" type="button">
                                <Volume2 size={12} />
                            </button>
                        </div>
                        <div className="create__timeline-nav__time-text">
                            1:14
                        </div>
                        <div className="create__timeline-nav__view-buttons">
                            <button className="primary-light-button" type="button">
                                <ZoomIn size={12} />
                            </button>
                            <button className="primary-light-button" type="button">
                                <ZoomOut size={12} />
                            </button>
                        </div>
                    </div>
                    <div className="create__timeline-editor">
                        <div>
                            {uploadedAudio &&
                                <WaveForm audioFileURL={uploadedAudio} volume={1} playing />
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePage
