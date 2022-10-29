import '../Reserva/Reserva.css'


function Reserva() {
  

    
    return (
        // <h1 className="text-center" style={{marginTop:"150px"}}>Aqui deberia ir la reserva</h1> 
        <>  
        <div id='cliente' className="offset-3 col-md-6 text-center">
            Agregar cliente
        </div>
            <form >
                <div className="offset-3 col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name='nombre'
                            placeholder="ingresa tu nombre"
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Cantidad de personas</label>
                        <input
                            type="number"
                            className="form-control"
                            name='cantidad'
                            placeholder="ingresa la cantidad"
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            name='fecha'
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Hora</label>
                        <input
                            type="time"
                            className="form-control"
                            name='hora'
                            // onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-outline-success" type="submit">Agregar</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Reserva;

