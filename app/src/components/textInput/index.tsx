
import React,{useEffect, useState} from "react";
import "./style.scss"
export type TextInputProps = {   
    name:string;
    labelText:string;
    className?:string
}

const TextInput = (props:TextInputProps) =>{
    return(
        <div className="TextInput">
            <div className="TextInput--label">{props.labelText}</div>
            <input type="text" name="{props.name}" className="TextInput--input"/>
        </div>
    ) 
}

export default TextInput;