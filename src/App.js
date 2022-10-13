
import './App.css';

function App() {
  return (
    <>
      <header>
        {/* Fixed navbar */}
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Loredo
            </a>
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
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Reserva</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <footer class="pie-pagina">
        <div>
          <h3>Nosotros</h3>
          <ul>
            <li><a href="#">A cerca de</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Promociones en sucursales</a></li>
          </ul>
        </div>
        <div>
          <h3>Servicio al cliente</h3>
          <ul>
            <li><a href="#">Contactanos</a></li>
            <li><a href="#">Reserva</a></li>
          </ul>
        </div>
        <div>
          <h3>Legales</h3>
          <ul>
            <li><a href="#">Terminos y condiciones</a></li>
            <li><a href="#">Aviso de privacidad</a></li>
          </ul>
        </div>
        <div>
          <h3>Siguenos</h3>
          <div class="red-social">
            <a class="boton-e" href="#"><i class="fa-brands fa-facebook"></i><p>Facebook</p></a>

            <a class="boton-e" href="#"><i class="fa-brands fa-whatsapp"></i><p>Whatsapp</p></a>

            <a class="boton-e" href="#"><i class="fa-brands fa-instagram"></i><p>Instagram</p></a>

          </div>
        </div>
        <div class="derechos">
          <p>© 2022 Loredo. Todos los derechos reservados. </p>
        </div>
      </footer>

    </>
  );
}

export default App;
