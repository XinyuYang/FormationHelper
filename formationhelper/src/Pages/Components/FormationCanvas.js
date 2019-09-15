import React, {Component} from 'react';
import {CssBaseline, Container, Paper, Grid} from '@material-ui/core';
import Dot from "./Dot";
import Typography from '@material-ui/core/Typography';

function createArr(num) {
    let arr = [];
    for (let i = 0; i < num; i++) arr.push(i);
    return arr
}

class StageSection extends Component {
    constructor(props) {
        super(props);
        this.state = {offset: 0};
    }

    handleClick(offset) {
        this.setState({offset})
    }

    render() {
        return (
            <div ref={this.myRef} className="Stage"
                 style={{direction: "column", justify: "center", alignItems: "center", position: 'relative'}}>
                {/* TODO: Use Grid for now, but should be replaced with a canvas component that can specify the position*/}
                {/* Dot only works using div */}

                {createArr(this.props.dancer).map((index) =>
                    <Dot name={'dot' + index} color="#000000"/>
                )}
            </div>
        )
    }
}


class FormationCanvas extends Component {
    state = {};
    componentDidMount = async () => {
        let element = document.querySelector('.Canvas');
        let style = window.getComputedStyle(element);
        let width = style.getPropertyValue('width');
        await this.setState({width});
        console.log(this.state.width)
    };


    render() {
        return (
            <div className="root">
                <Paper className="Canvas">
                    <div>
                        {createArr(62).map((index) =>
                            <hr className="vl" style={{
                                position: "absolute",
                                opacity: 0.1,
                                color: '#000000',
                                borderColor: '#000000',
                                marginLeft: 110 + index * 20,
                            }}/>
                        )}
                    </div>
                    <div>
                        {createArr(25).map((index) =>
                            <hr className="hl" style={{
                                position: "absolute",
                                opacity: 0.1,
                                color: '#000000',
                                borderColor: '#000000',
                                marginTop: index * 20,
                            }}/>
                        )}
                    </div>
                    <div className="Front">
                        <Typography>Front</Typography>
                    </div>

                    <div className="LeftStage">
                        <Typography>Off Stage</Typography>
                    </div>


                    <StageSection dancer={this.props.dancerNumber}/>


                    <div className="RightStage">
                        <Typography>Off Stage</Typography>
                    </div>

                    <div className="Back">
                        <Typography>Back</Typography>
                    </div>
                </Paper>
            </div>
        );
    }
}

export default FormationCanvas;


