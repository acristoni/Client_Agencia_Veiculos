import api from './api';
import { ICarro } from '../interface/carro.interface'

const getTodos = (): Promise<Array<ICarro>> => {
  const header = {
    'Content-Type': 'application/json'
  };
  return api
      .get(`/todos`, {
        headers: header,
      })
      .then((response) => response.data);
};

export default getTodos;