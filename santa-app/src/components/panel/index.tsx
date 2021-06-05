import React from 'react';
import { Modal, Button } from '@material-ui/core';
import { getMessage } from '../../utils/getMessage';
import './style.scss';

export type PanelProps = {
  className?: string;
  message: string;
  type: string;
  open: boolean;
  handlePopup: () => void;
};

const Panel = (props: PanelProps) => {
  const panelHeader = `Panel--header Panel--header--${props.type}`;

  return (
    <Modal
      open={props.open}
      className="align-center"
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className="panel">
        <div className={panelHeader}>{props.type.toLocaleUpperCase()}</div>
        <div className="Panel--body">
          <div className="message">{getMessage(props.message)}</div>
          <div className="btn-container align-center">
            <Button variant="contained" color="secondary" onClick={props.handlePopup}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Panel;
