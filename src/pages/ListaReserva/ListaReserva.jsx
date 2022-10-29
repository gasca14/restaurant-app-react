import '../ListaReserva/ListaReserva.css'
import { collection, onSnapshot} from 'firebase/firestore' 
import { db } from '../../firebase';
import { useState,useEffect } from 'react';


function ListaReserva() {

    const [datos,setDatos] = useState([])

    const getData = () =>{

        onSnapshot(collection(db,"clientes"),(querySnapshot)=>{
            setDatos(querySnapshot.docs.map(doc =>{
                return{...doc.data()}
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
                    Lista de espera
                </div>
                {/* <code>{JSON.stringify(datos)}</code> */}
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
                        {
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
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListaReserva;