import api from './api';
import { ICarro } from '../interface/carro.interface'

const getVendidos = (): Promise<Array<ICarro>> => {
  const header = {
    'Content-Type': 'application/json'
  };
  return api
      .get(`/vendidos`, {
        headers: header,
      })
      .then((response) => response.data);
};

export default getVendidos;