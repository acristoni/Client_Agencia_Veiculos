import { Route, Routes } from 'react-router-dom';
import Compra from './Pages/compra/Compra';
import Venda from '../src/Pages/venda/Venda';
import Todos from '../src/Pages/todos/Todos';
import Main from './Pages/main/Main'
import Disponiveis from '../src/Pages/disponiveis/Disponiveis'
import Vendidos from '../src/Pages/vendidos/Vendidos'

export default function MainRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Main />}
            />
            <Route
                path="/compra"
                element={<Compra />}
            />
            <Route
                path="/venda"
                element={<Venda />}
            />
            <Route
                path="/todos"
                element={<Todos />}
            />
               <Route
                path="/vendidos"
                element={<Vendidos />}
            />
               <Route
                path="/disponiveis"
                element={<Disponiveis />}
            />
        </Routes>
    )
}
