import Title from "./Title";
import '../Navbar/Navbar.css'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                {/* Fixed navbar */}
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Title name="Loredo"/>
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
                                    <Link className="nav-link active" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/menu">Menu</Link>    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/reserva">Reserva</Link>
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