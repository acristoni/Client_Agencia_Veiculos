import '../../GlobalStyle.css';
import getDisponiveis from '../../services/getDisponiveis';
import { useEffect, useState } from 'react';
import initCarro from '../../initState/carro.init'
import { ICarro } from '../../interface/carro.interface';
import formatData from '../../func/formatacaoData';
import ModalVenda from './modal/ModalVenda';
import objCurrency from '../../interface/objCurrency';

export default function Venda() {

    type typeCarro = ICarro;
    const[arrayCarros, setArrayCarros] = useState([initCarro]);
    const[modalIsOpen, setIsOpen] = useState(false);
    const[uuid, setUuid] = useState(0);
    
    const getListaTodos = async () => {
        const array:typeCarro[] = await getDisponiveis();
        setArrayCarros(array);
    }

    useEffect(() => {
        getListaTodos();
    }, [])

    const Venda = (uuid:number) => {
        setIsOpen(true);
        setUuid(uuid);
    }

    return (
        <div className="box">
            <h1>Veículos disponíveis para venda:</h1>
            <h2>Clique na linha desejada para realizar a venda!</h2>
            <table>
                <tr>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                    <th>Chassi</th>
                    <th>Valor Compra</th>
                    <th>Data Compra</th>
                </tr>
                {arrayCarros.map((carro)=>(
                    <tr key={carro.uuid} onClick={() => Venda(carro.uuid)}>
                        
                        <ModalVenda 
                            modalIsOpen={modalIsOpen}
                            closeModal={()=>setIsOpen(false)}
                            uuid={uuid}
                        />

                        <td>{carro.modelo}</td>
                        <td>{carro.marca}</td>
                        <td>{carro.anodefabricação}</td>
                        <td>{carro.placa}</td>
                        <td>{carro.cor}</td>
                        <td>{carro.chassi}</td>
                        <td>{carro.valordecompra.toLocaleString("pt-BR", objCurrency)}</td>
                        <td>{formatData(carro.datadacompra)}</td>
                    </tr>
                ))}                               
            </table>
            <a href='http://localhost:3000/'>
                <button>HOME</button>
            </a>
        </div>
    )
}