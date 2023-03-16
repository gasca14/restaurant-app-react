import '../ListaReserva/ListaReserva.css'
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react';


function ListaReserva() {

    const [datos, setDatos] = useState([])

    const getData = () => {
        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            setDatos(querySnapshot.docs.map(doc => {
                return { ...doc.data() }
            }))
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='offset-md-3 col-md-6' id='tabla'>
                <div className='text-center' id='lista'>
                    Lista de reservación
                </div>
                {/* <code>{JSON.stringify(datos)}</code>  */}
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-primary table-bordered mt-2">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.map((cliente, index) => {
                                    return (

                                        <tr key={index}>
                                            <th>{index + 1}</th>
                                            <td>{cliente.nombre}</td>
                                            <td>{cliente.cantidad}</td>
                                            <td>{cliente.fecha}</td>
                                            <td>{cliente.hora}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListaReserva;