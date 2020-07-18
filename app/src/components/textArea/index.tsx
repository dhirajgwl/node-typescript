
import React,{ChangeEvent} from "react";
import './style.scss'
export type TextAreaProps= {
    className?:string;
    name:string;
    labelText:string;
    value:string,
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = (props:TextAreaProps) =>{
    return(
        <div className="TextArea">
             <div className="TextArea--label">{props.labelText}</div>
            <textarea  value={props.value} name={props.name} className="TextArea--input" onChange={props.onChange}></textarea>
        </div>
     )  
}

export default TextArea;