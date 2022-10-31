import {Route,Routes} from 'react-router-dom'; 
import Home from '../pages/Inicio/Home';
import Menu from '../pages/Menu/Menu';
import Reserva from '../pages/Reserva/Reserva';
import ListaReserva from '../pages/ListaReserva/ListaReserva';
import NotFound from '../pages/NotFound/NotFound';


function AppRouter() {
    return ( 
        <>
            <Routes> {/* Rutas definidas*/}
                <Route exact path='home' element={<Home />}/>
                <Route exact path='menu' element={<Menu />}/>
                <Route exact path='reserva' element={<Reserva />}/>
                <Route exact path='ListaReserva' element={<ListaReserva />}/>
                
                <Route path='*' element={<NotFound />}/>
                <Route path='/' element={<Home />}/>


                    
                {/*Redireccion */}
                {/* <Route path='/' element={<Navigate to="/home"/>}/>
                <Route path='*' element={<Navigate to= "/404"/>}/> */}
            </Routes>
        </>
     );
}

export default AppRouter;