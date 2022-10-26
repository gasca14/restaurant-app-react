import {Navigate,Route,Routes} from 'react-router-dom'; 
import Home from '../pages/Inicio/Home';
import Menu from '../pages/Menu/Menu';
import Reserva from '../pages/Reserva/Reserva';
import NotFound from '../pages/NotFound/NotFound';
import Maki from '../pages/maki';
// import Acerca from '../pages/Acerca';

function AppRouter() {
    return ( 
        <>
            <Routes> {/* Rutas definidas*/}
                <Route path='home' element={<Home />}/>
                <Route path='menu' element={<Menu />}/>
                <Route path='reserva' element={<Reserva />}/>
                <Route path='404' element={<NotFound />}/>
                <Route path='maki' element={<Maki />}/>


                {/* <Route path='acerca' element={<Acerca />}/> */}


                {/*Redireccion */}
                <Route path='/' element={<Navigate to="/home"/>}/>
                <Route path='*' element={<Navigate to= "/404"/>}/>
            </Routes>
        </>
     );
}

export default AppRouter;