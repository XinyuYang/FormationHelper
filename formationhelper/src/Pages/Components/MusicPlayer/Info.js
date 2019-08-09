import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default class Info extends Component{
    state = {
      musicName: this.props.musicName,
      artist: this.props.artist,
    };
    render() {
        return(
            <div>
                <Typography component="h5" variant="h5">
                    {this.state.musicName}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {this.state.artist}
                </Typography>
            </div>
        );
    }
}