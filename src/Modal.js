import React from 'react';
import './Modal.css';

const Modal = props => {

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.teamMember.name}</h4>
                </div>
                <div className="modal-body">
                    {props.teamMember.name}

                </div>
                <div className="modal-footer">
                    <a onClick={() => props.onClose()}>Close</a>
                </div>
            </div>
        </div>
    )
}

export default Modal;