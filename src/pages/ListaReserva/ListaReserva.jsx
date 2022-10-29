import '../ListaReserva/ListaReserva.css'
// import {db} from '../firebase'

function ListaReserva() {

   
    return (
        <>
            <div className='offset-md-3 col-md-6' id='tabla'>
                <div className='text-center' id='lista'>
                    Lista de espera
                </div>
                <table className="table table-striped table-hover table-bordered mt-4">
                    <thead className='table-secondary'>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                        datos.map((cliente,index)=>{
                            return(

                                <tr key={index}>
                                    <th>{index +1}</th>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.cantidad}</td>
                                    <td>{cliente.fecha}</td>
                                    <td>{cliente.hora}</td>
                                </tr>
                            )
                        })
                    } */}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaReserva;