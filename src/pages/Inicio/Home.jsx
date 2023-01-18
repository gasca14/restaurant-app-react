import '../Inicio/Home.css'

function Home() {
  return (
    <>

      {/* Header */}
      <header>
        <img id='portada' src="./images/portada.jpg" alt="portada" />
      </header>
      {/* Page content */}
      <div  className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <img id='portada2' src="./images/portada2.jpg" alt="hola" />
          </div>
          <div className="col-md-6 mt-3">
            <h1 id='destacado'>Sobre Oriental Loredo</h1>
            <p id='text'>Tradicion desde 1850</p>
            <p id='text'>Or Loredo tiene sus inicios desde el nucleo de la familia a la cual siempre le ha encantado la convivencia familiar, el calor de hogar, pasar momentos agradables en familia.</p>
            <p id='text'>La familia se ha caracterizado por su sazon en la comida, a lo largo del tiempo y conociendo de diferentes tipos de gastronomia, nos adentramos conociendo de los mejores platillos de comida oriental, preparando nuestros platillos con un toque especial de la casa, añadiendo un sabor unico y especial.</p>
            <p id='text'>Para nosotros es importante hacer sentir a nuestros clientes como en casa, sintiendose comodos y disfrutando de pasar tiempo de calidad en familia y con sus amistades por lo cual les garantizamos un trato de primera.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id='contacto' className="container">
        <div className='row text-center'>
          <div className="col-md-12">
            <h1 id='destacado'>Contacto</h1><br />
            <p id='text'>Ofrecemos servicios para cuaquier tipo de evento. Lo mas importante son nuestros clientes por lo cual,nos adaptamos al tipo de evento que necesites, dentro de nuestras instalaciones o para tus eventos privados y familiares, sera un placer atenderte! No dudes en contactarnos.</p>
            <p id='text'><b>Servicio Or Loredo, San Luis Potosi, Lomas 4ta seccion #40.</b></p>
            <p id='text'>Para mayor informacion puedes comunicarte al 444-123-44-56, enviarnos un email a orloredo@gmail.com, o puedes registrarte en el link de Reserva que se encuentra en la pagina.</p>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;