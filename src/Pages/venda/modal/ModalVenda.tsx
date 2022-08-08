import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import putVenda from '../../../services/putVenda';

interface Props {
  uuid: number;
  modalIsOpen: boolean;
  closeModal: () => void;
}

interface Values {
  precoVenda: number;
}

interface DadosVenda {
  uuid: number;
  valordavenda: number;
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

const ModalVenda: React.FC<Props> = ({uuid, modalIsOpen, closeModal}) => {
  const updateVenda  = async (venda:DadosVenda) => {
    const retorno =   await putVenda(venda);
    return setMensSucesso(retorno);
  }
  
  const[venda, setVenda] = useState({
    "uuid": 0,
    "valordavenda": 0
  });
  const[mensSucesso, setMensSucesso] = useState('');

  useEffect(()=>{
    updateVenda(venda);
  },[venda]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="ModalVenda"
    >
      { mensSucesso.length > 1 ? 
      <h1>{mensSucesso}</h1> : 
      <Formik
        initialValues={{
          precoVenda: 0,
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            const dadosVenda = {
              "uuid": uuid,
              "valordavenda": values.precoVenda
            }
            setVenda(dadosVenda);
            setSubmitting(false);
            setTimeout(()=>{
              closeModal();
            }, 2000)
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="precoVenda">Digite o valor da venda do veículo:</label>
          <Field id="precoVenda" name="precoVenda" placeholder="R$ 100.000,00" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      }
      <h4>Pressione ESC para voltar para lista</h4>
    </Modal>
  );
};

export default ModalVenda;
