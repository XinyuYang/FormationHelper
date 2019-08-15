import React, {Component} from "react";
import {Circle} from "react-shapes";
import Draggable from 'react-draggable';
import {Grid} from '@material-ui/core';

class Dot extends Component{
    render(input){
        var color = input? input.color: "#000000"; //currently not working
        return(
            <Circle r={10} fill={{color:color}} stroke={{color:color}} strokeWidth={0}/>
        )
    }
}


export default Dot;