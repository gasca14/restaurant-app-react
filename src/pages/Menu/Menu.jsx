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
                            <img src="./images/ramen3.jpg" className="d-block w-100" alt="ramen" />
                            <div className="carousel-caption  d-md-block">
                                <h2 className="princ">Ramen</h2>
                                <p>  Gracias, en parte, al anime y el manga, el ramen se ha convertido en
                                    uno de los platos más populares de la cocina nipona. ¡Y menos mal,
                                    porque está buenísimo y es especialmente reconfortante cuando hace
                                    frío!</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={10000}>
                            <img src="./images/sashimi.jpg" className="d-block w-100" alt="sashimi" />
                            <div className="carousel-caption d-md-block">
                                <h2 className="princ">Sashimi</h2>
                                <p>El sashimi es un tipo de corte de pescado y marisco muy
                                    característico de la cocina nipona. Es habitual servir los trozos
                                    con salsa de soja, jengibre y wasabi, y en ocasiones con vegetales.</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={10000}>
                            <img src="./images/makis.jpg" className="d-block w-100" alt="maki" />
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
            <div className="container-fluid mt-5">
                <div className="row">
                    <h3 id='titulo'>Entradas</h3 >
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/entradas/surimirelleno.jpg" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">Kaniwa</h5>
                                <p id='ingredientes'>
                                    Surimi relleno de queso crema,empanizado acompañado con aderezo de la casa.
                                </p>
                                <p id='price'>$50</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/entradas/tempura.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Tempura de verduras</h5>
                                <p id='ingredientes'>
                                Mix de verduras al vapor cubiertas con tempura y aderezo.   
                                </p>
                                <p id='price'>$65</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/entradas/brochetas.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Yakitori</h5>
                                <p id='ingredientes'>
                                3 deliciosas brochetas de pollo bañadas en salsa teriyaki.
                                </p>
                                <p id='price'>$60</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/entradas/queso.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Kushi-agues</h5>
                                <p id='ingredientes'>
                                6 brochetas de queso asadero empanizadas con el delicioso aderezo de la casa.
                                </p>
                                <p id='price'>$75</p>
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
                                <h5 className="card-title">Smoke-roll</h5>
                                <p id='ingredientes'>
                                    pepino,aguacate,philadelphia,fresco salmón ahumado.
                                </p>
                                <p id='price'>$100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/makis/anguila.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Kamicoco</h5>
                                <p id='ingredientes'>
                                camarón empanizado, philadelphia,zanahoria,aguacate,empanizado con coco y bañado en salsa de anguila.
                                </p>
                                <p id='price'>$100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/makis/empanizado.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Sake-yake</h5>
                                <p id='ingredientes'>
                                salmón,queso crema,verduras,crujiente empanzado.
                                </p>
                                <p id='price'>$100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/makis/res.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Kushiyaki</h5>
                                <p id='ingredientes'>
                                res,queso crema,aguacate,cujiente empanizado.
                                </p>
                                <p id='price'>$100</p>
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
                                <h5 className="card-title">Oreo-tempura</h5>
                                <p id='ingredientes'>
                                    galletas oreo cubiertas con tempura, acompañadas de helado.
                                </p>
                                <p id='price'>$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="card">
                            <img src="/images/postres/brownies.jpeg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Brownilla</h5>
                                <p id='ingredientes'>
                                brownies de chocolate y helado de vainilla.
                                </p>
                                <p id='price'>$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/postres/helado.jpg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Helado-tempura</h5>
                                <p id='ingredientes'>
                                bola de helado con una crujiente cubierta de tempura "caliente por fuera, frio por dentro".
                                </p>
                                <p id='price'>$50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="card">
                            <img src="/images/postres/banana.jpeg" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Banana split</h5>
                                <p id='ingredientes'>
                                plátano acompañado con 3 bolas de helado, bañadas con mermelada de fresa y chocolate.
                                </p>
                                <p id='price'>$50</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;