
import React,{useEffect, useState} from "react";
import './style.scss'
export type TextAreaProps= {
    className?:string;
    name:string;
    labelText:string
}

const TextArea = (props:TextAreaProps) =>{
    return(
        <div className="TextArea">
             <div className="TextArea--label">{props.labelText}</div>
            <textarea name="{props.name}" className="TextArea--input"></textarea>
        </div>
        

    )
       
        
}

export default TextArea;