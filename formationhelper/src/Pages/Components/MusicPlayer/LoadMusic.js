import React, {Component} from 'react';
import Button from "@material-ui/core/Button";




export default class LoadMusic extends Component{
    state = {
        MusicName: null,
        MusicLength: 0,
    };

    render() {
        return(
            <div className ="Player">
                <input
                    accept="music/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" >
                        Upload Music
                    </Button>
                </label>
            </div>
        );
    }
}