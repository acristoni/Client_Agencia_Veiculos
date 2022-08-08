import '../../GlobalStyle.css';

function Main() {
  return (
    <div>
      {false ? <h1>verdade</h1> : <h1>mentira</h1>}
      <section className='box'>
        <h1>Agência de Veículos</h1>
        <div className='compraevenda'>
          <a href='http://localhost:3000/compra'>
            <button>COMPRA</button>
          </a>
          <a href='http://localhost:3000/venda'>
            <button>VENDA</button>
          </a>
        </div>
        <h2>Listar veículos:</h2>
        <div className='compraevenda'>
          <a href='http://localhost:3000/todos'>
            <button>TODOS</button>
          </a>
          <a href='http://localhost:3000/disponiveis'>
            <button>DISPONÍVEIS</button>
          </a>
          <a href='http://localhost:3000/vendidos'>
            <button>VENDIDOS</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Main;
