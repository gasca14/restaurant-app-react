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
                                <button className="btn btn-primary">Ver mas</button>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={10000}>
                            <img src="./images/sashimi.jpg" className="d-block w-100" alt="sashimi" />
                            <div className="carousel-caption d-md-block">
                                <h2 className="princ">Sashimi</h2>
                                <p>El sashimi es un tipo de corte de pescado y marisco muy
                                    característico de la cocina nipona. Es habitual servir los trozos
                                    con salsa de soja, jengibre y wasabi, y en ocasiones con vegetales.</p>
                                <button className="btn btn-primary">Ver mas</button>
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
                                <button className="btn btn-primary">Ver mas</button>
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
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="/images/makis.jpg" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">Maki</h5>
                                <p id='ingredientes'>
                                    Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                                <p id='price'>$200</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 ">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                    
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                    Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 ">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                    Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 ">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <div className="card">
                            <img src="https://picsum.photos/seed/dos/500" className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p id='ingredientes'>
                                Aqui deberia ir el nombre e ingredientes del platillo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;