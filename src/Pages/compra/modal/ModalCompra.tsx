import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import putVenda from '../../../services/putVenda';

interface Props {
    mensagemSucesso: string;
    modalIsOpen: boolean;
    closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 'large',
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
};

if (process.env.NODE_ENV !== 'test') {
  Modal.setAppElement('#root');
}

const ModalVenda: React.FC<Props> = ({mensagemSucesso, modalIsOpen, closeModal}) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="ModalCompra"
    >
        <h1>{mensagemSucesso}</h1>
        <h4>Pressione ESC para voltar</h4>
    </Modal>
  );
};

export default ModalVenda;
