import React from "react";
import "./style.scss"

export type ButtonProps = {
    text: string;
    className?:string;
    id?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = (props:ButtonProps) =>{
return <button className="Button" id={props.id} onClick={props.onClick}>{props.text}</button>
}

export default Button;