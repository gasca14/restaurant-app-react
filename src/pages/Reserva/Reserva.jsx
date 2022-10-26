import '../Reserva/Reserva.css'

function clickHandler() {
    alert('hola')
}
function Reserva() {
    const usuario = [
        {
            id: 1,
            nombre: 'juan',
            cantidad: 3,
            fecha:'14/12/2022',
            hora: '2pm'
        },
        // {
        //     id: 2,
        //     nombre: 'pedro',
        //     cantidad: 3,
        //     hora: '1pm'
        // },
    ]
    return (
        // <h1 className="text-center" style={{marginTop:"150px"}}>Aqui deberia ir la reserva</h1> 
        <>  
        <div id='cliente' className="offset-3 col-md-6 text-center">
            Agregar cliente
        </div>
            <form>
                <div className="offset-3 col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name='nombre'
                            placeholder="ingresa tu nombre"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Cantidad de personas</label>
                        <input
                            type="number"
                            className="form-control"
                            name='cantidad'
                            placeholder="ingresa la cantidad"
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            name='fecha'
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Hora</label>
                        <input
                            type="time"
                            className="form-control"
                            name='hora'
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-success" type="button" onClick={clickHandler}>Enviar</button>
                    </div>
                </div>
            </form>
            <div id='lista' className="offset-3 col-md-6 mt-3 text-center">
                Lista de espera
            </div>
            <div className='offset-md-3 col-md-6'>
                <table className="table table-striped table-hover mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody id='tblReserva'>
                        {console.log(usuario)}
                        {usuario.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.cantidad}</td>
                                    <td>{item.fecha}</td>
                                    <td>{item.hora}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default Reserva;

function Mostrar() {
    return (
        <>
            tblReserva.inner
        </>
    );
}
