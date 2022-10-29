import {Navigate,Route,Routes} from 'react-router-dom'; 
import Home from '../pages/Inicio/Home';
import Menu from '../pages/Menu/Menu';
import Reserva from '../pages/Reserva/Reserva';
import NotFound from '../pages/NotFound/NotFound';
import ListaReserva from '../pages/ListaReserva/ListaReserva';


function AppRouter() {
    return ( 
        <>
            <Routes> {/* Rutas definidas*/}
                <Route path='home' element={<Home />}/>
                <Route path='menu' element={<Menu />}/>
                <Route path='reserva' element={<Reserva />}/>
                <Route path='ListaReserva' element={<ListaReserva />}/>
                <Route path='404' element={<NotFound />}/>
        

                {/*Redireccion */}
                <Route path='/' element={<Navigate to="/home"/>}/>
                <Route path='*' element={<Navigate to= "/404"/>}/>
            </Routes>
        </>
     );
}

export default AppRouter;