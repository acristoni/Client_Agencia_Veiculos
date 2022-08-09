import axios, { AxiosError } from 'axios';
import api from './api';

interface Params {
    uuid: number,
    valordavenda: number
}

const putVenda = async (venda: Params): Promise<string> => {
  const header = {
    'Content-Type': 'application/json',
  };

  try {
    const response = 
    await
    api
      .put(
          '/venda',
          {
            uuid: venda.uuid,
            valordavenda: venda.valordavenda
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
  }

export default putVenda;