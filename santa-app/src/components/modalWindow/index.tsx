import React, { Fragment } from 'react';
import {CSSTransition} from "react-transition-group";
import './style.scss';
import Button from '../button';

export type ModalWindowProps = {
  className?: string;
  children: React.ReactNode;
  success?: boolean;
  open: boolean;
  loading: boolean;
  handlePopup: () => void;
};

const ModalWindow = (props: ModalWindowProps) => {
  let modalClass = 'Modal';
  let headingText = 'Success';
  if (props.open) modalClass += ' Modal--open';

  let panelHeader = 'Panel--header';
  if (props.success) {
    panelHeader += ' Panel--header--success';
    headingText = 'Success';
  } else {
    panelHeader += ' Panel--header--error';
    headingText = 'Error';
  }

  const modalContent = () => {
    if (props.loading) {
      return <div className="loading"></div>;
    }
    return (
      <div className="Modal--panel">
        <div className={panelHeader}>{headingText}</div>
        <div className="Panel--body">
          <div className="message">{props.children}</div>
          <div className="btn-container">
            <Button text="Close" onClick={props.handlePopup}></Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={modalClass}>
      <div className="Modal--bg"></div>
      <CSSTransition in={props.open} timeout={500} classNames="Modal-popup" >
        {modalContent()}
      </CSSTransition>      
    </div>
  );
};

export default ModalWindow;
