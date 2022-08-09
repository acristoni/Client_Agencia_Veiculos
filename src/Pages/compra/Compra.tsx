import '../../GlobalStyle.css';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import postCarro from '../../services/postCarro'
import ModalCompra from './modal/ModalCompra'

interface Values {
    modelo: string;
    marca: string;
    anodefabricação: number;
    placa: string;
    cor: string;
    chassi: string;
    valordecompra: number;
}


export default function Compra() {
    const[modalIsOpen, setIsOpen] = useState(false);
    const[mensagemRetorno, setMensagemRetorno] = useState('');
    const[dadosCompra, setDadosCompra] = useState({ 
        "modelo": '',
        "marca": '',
        "anodefabricação": 0,
        "placa": '',
        "cor": '',
        "chassi": '',
        "valordecompra": 0
    })

    useEffect(()=>{
        if (dadosCompra.valordecompra !== 0) {
            enviaDadosCompra(dadosCompra);
            setIsOpen(true);
        }
    },[dadosCompra])

    const enviaDadosCompra = async (dados:Values) => {
        const response: string =  await postCarro(dados);
        return setMensagemRetorno(response);
    }

    return (
        <div className="box">
            <ModalCompra 
                modalIsOpen={modalIsOpen}
                closeModal={()=>setIsOpen(false)}
                mensagemRetorno={mensagemRetorno}
            />

            <h1>Cadastro de compra de veiculo:</h1>
            <div className = 'form'>

                <Formik
                    initialValues={{
                        modelo: '',
                        marca: '',
                        anodefabricação: 0,
                        placa: '',
                        cor: '',
                        chassi: '',
                        valordecompra: 0
                    }}
                    onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                    ) => {
                    setTimeout(() => {
                        setDadosCompra(values);
                        setSubmitting(false);
                    }, 500);
                    }}
                >
                    <Form>
                        <label htmlFor="modelo">Modelo</label>
                        <Field id="modelo" name="modelo" placeholder="Fusca" />

                        <label htmlFor="marca">Marca</label>
                        <Field id="marca" name="marca" placeholder="VW" />

                        <label htmlFor="anodefabricação">Ano de Fabricação</label>
                        <Field id="anodefabricação" name="anodefabricação" placeholder="1967" />

                        <label htmlFor="placa">Placa</label>
                        <Field id="placa" name="placa" placeholder="Ex: VIX-2020 ou VIX2A20" />

                        <label htmlFor="cor">Cor</label>
                        <Field id="cor" name="cor" placeholder="Preto" />

                        <label htmlFor="chassi">Chassi</label>
                        <Field id="chassi" name="chassi" placeholder="9BG116GW04C400001" />

                        <label htmlFor="valordecompra">Valor da Compra</label>
                        <Field id="valordecompra" name="valordecompra" placeholder="R$ 100.000,00" />

                        <button type="submit">Realizar Compra</button>
                    </Form>
                </Formik>
            </div>
            <a href='http://localhost:3000/'>
                <button>HOME</button>
            </a>
        </div>
    )
}