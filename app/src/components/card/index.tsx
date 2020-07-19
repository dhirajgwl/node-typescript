import React, { ReactNode } from 'react';
import './style.scss';
export type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="Card">
      <div className="Card__body">{props.children}</div>
    </div>
  );
};

export default Card;
