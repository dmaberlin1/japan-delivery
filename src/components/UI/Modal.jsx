import styles from './Modal.module.css'
import React from 'react';
import ReactDOM from "react-dom";

const Backdrop=(props)=>{
    return <div className={styles.backdrop}></div>
}

const ModalWindow=(props)=>{
    return(
      <div className={styles.modal}>
          <div className={styles.content}>{props.children}</div>
      </div>
    )
}


const portalElement=document.getElementById('overlays')

const Modal = (props) => {
    return (
      <>
          {ReactDOM.createPortal(<Backdrop></Backdrop>,portalElement)}
          {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>,portalElement)}
      </>
      //в ModalWindow прокинем children который будет передан в Modal
    );
};

export default Modal;
