import Title from "./Title";
import '../Navbar/Navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                {/* Fixed navbar */}
                <nav id="nav" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Title name="OR Loredo"/>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarCollapse">
                            <ul className="navbar-nav mx-auto"> {/*mx-auto para centrar elementos del navbar*/}
                                <li className="nav-item ">
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/menu">Menu</NavLink>    
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/reserva">Reserva</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/ListaReserva">ListaReserva</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;