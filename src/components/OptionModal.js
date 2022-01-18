import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className='modal'
    >
        {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
        <button className='button button-addOption' onClick={props.handleClearSelectedOption}>
            Okay
        </button>
    </Modal>
);

export default OptionModal;
