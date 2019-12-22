import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default class Info extends Component{
    state = {
      musicName: null,
    };
    componentDidUpdate(prevProps) {
        if(this.props.musicName !== prevProps.musicName){
            this.setState({musicName: this.props.musicName})
        }
    }

    render() {
        return(
            <div>
                <Typography variant="subtitle1">
                    {this.state.musicName}
                </Typography>
            </div>
        );
    }
}