import React, { useState } from 'react';
import './CriarEventos.css'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function CriarEventos(props) {

  const { modalIsOpen, setIsOpen } = props;

return(
 <div>
    <Modal
      isOpen={modalIsOpen}
    >
      <button onClick={()=>{setIsOpen(false)}}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  </div>
  )
}

export default CriarEventos