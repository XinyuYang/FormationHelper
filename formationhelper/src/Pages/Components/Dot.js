import React from "react";
import {Circle} from "react-shapes";

export default function Dot(input){
    return(
        <Circle r={10} fill={{color:input.color}} stroke={{color:input.color}} strokeWidth={0} />
    )
}