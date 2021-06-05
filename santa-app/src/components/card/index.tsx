import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import santa from './santa.png';
import './style.scss';
export type CardProps = {
  children: ReactNode;
  className?: string;
  image?: string;
};

const Card = (props: CardProps) => {
  return (
    <Grid container justify="center">
      <Grid item xs={6}>
        <Grid container justify="center" className="Card">
          <Grid item xs={6}>
            <div className="Card__image">
              <img src={props.image || santa}></img>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="Card__body">{props.children}</div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Card;
