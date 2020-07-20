import React from 'react';
import './style.scss';

export type HeaderProps = {
  className?: string;
  title: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="Header">
      <div className="Header--icon"></div>
      <div className="Header--text">{props.title}</div>
    </div>
  );
};

export default Header;
