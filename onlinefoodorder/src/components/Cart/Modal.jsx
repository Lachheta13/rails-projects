import React ,{Fragment}from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css'


const poratalElement = document.getElementById('overlay');
const ModalOverlay = (props) => {

    return <div className = {classes.modal}> 
        <div className = {classes.content} >{props.children}</div>
    </div>

};
const BackDrop = (props) =>{
    return <div className = {classes.backdrop} onClick={props.onClose}></div>
};


const Modal = (props) =>{
    return <Fragment>
        {ReactDom.createPortal(<BackDrop onClose={props.onHide}/>,poratalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,poratalElement)}
    </Fragment>
}
export default Modal;