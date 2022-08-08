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

const postCarro = (compra: Params): Promise<string> => {
  const header = {
    'Content-Type': 'application/json',
  };

  return api
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
      .then((response) => response.data);
};

export default postCarro;