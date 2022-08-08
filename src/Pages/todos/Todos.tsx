import '../../GlobalStyle.css';
import getTodos from '../../services/getTodos';
import { useEffect, useState } from 'react';
import initCarro from '../../initState/carro.init'
import { ICarro } from '../../interface/carro.interface';
import formatData from '../../func/formatacaoData';
import objCurrency from '../../interface/objCurrency';

export default function Todos() {

    type typeCarro = ICarro;
    const[arrayCarros, setArrayCarros] = useState([initCarro])
    
    const getListaTodos = async () => {
        const array:typeCarro[] = await getTodos();
        setArrayCarros(array);
    }

    useEffect(() => {
        getListaTodos();
    }, [])

    return (
        <div className="box">
            <h1>Todos os veículos que já passaram pela agência:</h1>
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
                    <th>Valor Venda</th>
                    <th>Data Venda</th>
                </tr>
                {arrayCarros.map((carro)=>(
                    <tr key={carro.uuid}>
                        <td>{carro.modelo}</td>
                        <td>{carro.marca}</td>
                        <td>{carro.anodefabricação}</td>
                        <td>{carro.placa}</td>
                        <td>{carro.cor}</td>
                        <td>{carro.chassi}</td>
                        <td>{carro.valordecompra.toLocaleString("pt-BR", objCurrency)}</td>
                        <td>{formatData(carro.datadacompra)}</td>
                        <td>{carro.vendido ?
                        carro.valordavenda.toLocaleString("pt-BR", objCurrency) 
                        : "Carro Disponível"}</td>
                        <td>{carro.vendido ?
                        formatData(carro.datadavenda) : 
                        "Carro Disponível"}</td>
                    </tr>
                ))}                               
            </table>
            <a href='http://localhost:3000/'>
                <button>HOME</button>
            </a>
        </div>
    )
}