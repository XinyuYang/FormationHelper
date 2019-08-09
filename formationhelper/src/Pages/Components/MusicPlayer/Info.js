import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

export default class Info extends Component{
    render() {
        return(
            <div>
                <Typography component="h5" variant="h5">
                    {`${this.props.musicName}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {`${this.props.artist}`}
                </Typography>
            </div>
        );
    }
}