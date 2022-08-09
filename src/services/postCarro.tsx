import axios, { AxiosError } from 'axios';
import api from './api';

interface Params {
    modelo: string;
    marca: string;
    anodefabricação: number;
    placa: string;
    cor: string;
    chassi: string;
    valordecompra: number;
}

const postCarro = async (compra: Params): Promise<string> => {
  const header = {
    'Content-Type': 'application/json',
  };

  try {
    const response = 
    await 
      api
        .post(
            '/cadastro',
            {
              modelo: compra.modelo,
              marca: compra.marca,
              anodefabricação: compra.anodefabricação,
              placa: compra.placa,
              cor: compra.cor,
              chassi: compra.chassi,
              valordecompra: compra.valordecompra,
            },
            {
              headers: header,
            },
        )
        return response.data

      } catch (error) {
          if (axios.isAxiosError(error)) {
            type ServerError = {
              error: string | PromiseLike<string>;};

            const serverError = error as AxiosError<ServerError>;
            if (serverError && serverError.response) {
              return serverError.response.data.error;
            }
          }
          const errorMessage = "Erro interno da aplicação"
          return errorMessage;
        }
};

export default postCarro;