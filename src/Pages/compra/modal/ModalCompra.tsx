import React from 'react';
import Modal from 'react-modal';

interface Props {
    mensagemRetorno: string;
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

const ModalVenda: React.FC<Props> = ({mensagemRetorno, modalIsOpen, closeModal}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="ModalCompra"
    >
        <h1>{mensagemRetorno}</h1>
        <h4>Pressione ESC para voltar</h4>
    </Modal>
  );
};

export default ModalVenda;
