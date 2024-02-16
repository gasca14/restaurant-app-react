import '../Reserva/Reserva.css'
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



function Reserva() {

    const [form, setForm] = useState({
        nombre: '',
        cantidad: '',
        fecha: '',
        hora: ''
    })

    const navigate = useNavigate()
    const handleInputChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const saveForm = async (event) => {
        event.preventDefault()
        await addDoc(collection(db, "clientes"), form)
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Mensaje:',
            text: 'Registro de reservacion exitosa!',
            showConfirmButton: false,
            timer: 2000
        }).then(() => {
            //   window.location.href = "/ListaReserva"
            navigate("/ListaReserva")
        })
    }

    return (

        <>
            <div id='cliente' className="offset-3 col-md-6 text-center">
                Reservación
            </div>
            {/* <code>{JSON.stringify(form)}</code> */}
            <form onSubmit={saveForm}>
                <div className="offset-3 col-md-6">
                    <div className="form-group">
                        <label htmlFor='nombre' id='etiqueta'>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name='nombre'
                            id='nombre'
                            placeholder="Ingrese su nombre"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor='cantidad' id='etiqueta'>Cantidad</label>
                        <input
                            type="number"
                            min= '1'
                            max='10'
                            className="form-control"
                            name='cantidad'
                            id='cantidad'
                            placeholder="Ingrese la cantidad de comensales"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="fecha" id='etiqueta'>Fecha</label>
                        <input
                            type="date"
                            min="2023-05-15"
                            max="2023-12-31"
                            className="form-control"
                            name='fecha'
                            id='fecha'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor='hora' id='etiqueta'>Hora</label>
                        <input
                            type="time"
                            className="form-control"
                            name='hora'
                            id='hora'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-outline-primary" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Reserva;