import React from 'react';
import './style.scss';
export type TextInputProps = {
  name: string;
  labelText: string;
  className?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: TextInputProps) => {
  return (
    <div className="TextInput">
      <div className="TextInput--label">{props.labelText}</div>
      <input type="text" value={props.value} name={props.name} className="TextInput--input" onChange={props.onChange} />
    </div>
  );
};

export default TextInput;
