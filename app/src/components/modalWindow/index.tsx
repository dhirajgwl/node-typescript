import React, { useState } from 'react';
import './style.scss';
import Button from '../button';

export type ModalWindowProps = {
  className?: string;
  children: React.ReactNode;
  success?: boolean;
  open: boolean;
  handlePopup: () => void;
};

const ModalWindow = (props: ModalWindowProps) => {
  let modalClass = 'Modal';
  if (props.open) modalClass += ' Modal--open';

  let panelHeader = 'Panel--header';
  if (props.success) panelHeader += ' Panel--header--success';
  else panelHeader += ' Panel--header--error';

  return (
    <div className={modalClass}>
      <div className="Modal--bg"></div>
      <div className="Modal--panel">
        <div className={panelHeader}> HeadIng</div>
        <div className="Panel--body">
          <div className="message">{props.children}</div>
          <div className="btn-container">
            <Button text="Close" onClick={props.handlePopup}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
