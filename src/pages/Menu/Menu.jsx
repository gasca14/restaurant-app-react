import '../Menu/Menu.css'

function Menu() {
    return (
        <>
            <main>
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-info slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img id='portada_menu' src="./images/ramen3.jpg" className="d-block w-100" alt="ramen" />
                            <div className="carousel-caption  d-md-block">
                                <h2 className="princ">Ramen</h2>
                                <p>  Gracias, en parte, al anime y el manga, el ramen se ha convertido en
                                    uno de los platos más populares de la cocina nipona. ¡Y menos mal,
                                    porque está buenísimo y es especialmente reconfortante cuando hace
                                    frío!</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={10000}>
                            <img id='portada_menu' src="./images/sashimi.jpg" className="d-block w-100" alt="sashimi" />
                            <div className="carousel-caption d-md-block">
                                <h2 className="princ">Sashimi</h2>
                                <p>El sashimi es un tipo de corte de pescado y marisco muy
                                    característico de la cocina nipona. Es habitual servir los trozos
                                    con salsa de soja, jengibre y wasabi, y en ocasiones con vegetales.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={10000}>
                            <img id='portada_menu' src="./images/makis.jpg" className="d-block w-100" alt="maki" />
                            <div className="carousel-caption  d-md-block">
                                <h2 className="princ">Makis</h2>
                                <p>En japonés la palabra “maki” significa enrollado y suele designar
                                    esos rollos de alga nori rellenos de arroz sushi y de verduras y / o
                                    pescado. Un maki tradicional, una vez enrollado, se suele cortar en
                                    8 porciones, lo que hace que tenga un cierto tipo de grosor.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </main>
            <div className="p-4">
                <div className="row">
                    <h3 id='titulo'>Entradas</h3 >
                    <div className="col-lg-3 col-md-6">
                        <div className="card" >
                            <img src="/images/entradas/surimirelleno.jpg" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Kaniwa</h5>
                                <p id='ingredientes' className='text-center'>
                                    Surimi relleno de queso crema,empanizado acompañado con aderezo de la casa.
                                </p>
                                <p id='price' className='text-center'>$50.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/entradas/tempura.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Tempura de verduras</h5>
                                <p id='ingredientes' className='text-center'>
                                Mix de verduras al vapor cubiertas con tempura y aderezo.   
                                </p>
                                <p id='price'className='text-center'>$65.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/entradas/brochetas.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Yakitori</h5>
                                <p id='ingredientes' className='text-center'>
                                3 deliciosas brochetas de pollo bañadas en salsa teriyaki.
                                </p>
                                <p id='price' className='text-center'>$60.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/entradas/queso.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Kushi-agues</h5>
                                <p id='ingredientes' className='text-center'>
                                6 brochetas de queso asadero empanizadas con el delicioso aderezo de la casa.
                                </p>
                                <p id='price' className='text-center'>$75.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 id='titulo'>Makis</h3 >
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/makis/salm.jpg" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Smoke-roll</h5>
                                <p id='ingredientes' className='text-center'>
                                    pepino,aguacate,philadelphia,fresco salmón ahumado.
                                </p>
                                <p id='price' className='text-center'>$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/makis/anguila.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Kamicoco</h5>
                                <p id='ingredientes' className='text-center'>
                                camarón empanizado, philadelphia,zanahoria,aguacate,empanizado con coco y bañado en salsa de anguila.
                                </p>
                                <p id='price' className='text-center'>$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/makis/empanizado.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Sake-yake</h5>
                                <p id='ingredientes' className='text-center'>
                                salmón,queso crema,verduras,crujiente empanizado.
                                </p>
                                <p id='price' className='text-center'>$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/makis/res.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Kushiyaki</h5>
                                <p id='ingredientes' className='text-center'>
                                res,queso crema,aguacate,crujiente empanizado.
                                </p>
                                <p id='price' className='text-center'>$100.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h3 id='titulo'>Postres</h3 >
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/postres/Tempura-helado.jpg" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Oreo-tempura</h5>
                                <p id='ingredientes' className='text-center'>
                                    galletas oreo cubiertas con tempura, acompañadas de helado.
                                </p>
                                <p id='price' className='text-center'>$50.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/postres/brownies.jpeg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Brownilla</h5>
                                <p id='ingredientes' className='text-center'>
                                brownies de chocolate y helado de vainilla.
                                </p>
                                <p id='price' className='text-center'>$50.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/postres/helado.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Helado-tempura</h5>
                                <p id='ingredientes' className='text-center'>
                                bola de helado con una crujiente cubierta de tempura "caliente por fuera, frio por dentro".
                                </p>
                                <p id='price' className='text-center'>$50.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/postres/banana.jpeg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Banana split</h5>
                                <p id='ingredientes' className='text-center'>
                                plátano acompañado con 3 bolas de helado, bañadas con mermelada de fresa y chocolate.
                                </p>
                                <p id='price' className='text-center'>$50.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;