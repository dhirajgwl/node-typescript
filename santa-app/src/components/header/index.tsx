import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss';

export type HeaderProps = {
  className?: string;
  title: string;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <div className="Header">
        <div className="Header--icon"></div>
        <div className="Header--text">{props.title}</div>
      </div>
    </Grid>
  );
};

export default Header;
