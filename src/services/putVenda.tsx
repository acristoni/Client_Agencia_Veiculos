import api from './api';

interface Params {
    uuid: number,
    valordavenda: number
}

const putVenda = (venda: Params): Promise<string> => {
  const header = {
    'Content-Type': 'application/json',
  };

  return api
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
      .then((response) => response.data);
};

export default putVenda;