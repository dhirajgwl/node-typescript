import React from "react";
import "./style.scss"

export type ButtonProps = {
    text: string;
    className?:string;
}

const Button = (props:ButtonProps) =>{
return <button className="Button">{props.text}</button>
}

export default Button;