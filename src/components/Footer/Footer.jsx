import '../Footer/Footer.css'

import { Link, NavLink} from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className="pie-pagina">
                <div>
                    <h3>Nosotros</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*" >Acerca de</Link></li>
                        <li><Link className="nav-link active" to="*">Sucursales</Link></li>
                        <li><NavLink className="nav-link active" to="/menu">Promociones en sucursales</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3>Servicio al cliente</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*">Contactanos</Link></li>
                        <li><NavLink className="nav-link active" to="/reserva">Reserva</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h3>Legales</h3>
                    <ul>
                        <li><Link className="nav-link active" to="*">Terminos y condiciones</Link></li>
                        <li><Link className="nav-link active" to="*">Aviso de privacidad</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Siguenos</h3>
                    <div className="red-social">
                        <a className="boton-e" href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook"></i><p>Facebook</p></a>
                        <a className="boton-e" href='https://web.whatsapp.com/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-whatsapp"></i><p>Whatsapp</p></a>
                        <a className="boton-e" href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i><p>Instagram</p></a>
                    </div>
                </div>
                <div className="derechos">
                    <small>© 2024 Loredo. Todos los derechos reservados. </small>
                </div>
            </footer>
        </>
    );
}

export default Footer;