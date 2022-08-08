import api from './api';
import { ICarro } from '../interface/carro.interface'

const getDisponiveis = (): Promise<Array<ICarro>> => {
  const header = {
    'Content-Type': 'application/json'
  };
  return api
      .get(`/disponiveis`, {
        headers: header,
      })
      .then((response) => response.data);
};

export default getDisponiveis;