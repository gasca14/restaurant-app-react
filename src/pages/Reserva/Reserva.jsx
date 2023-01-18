import '../Reserva/Reserva.css'
import { collection,addDoc} from 'firebase/firestore' 
import { useState } from 'react'
import { db } from '../../firebase';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



function Reserva() {
  
    const [form,setForm] = useState({
        nombre:'',
        cantidad:'',
        fecha:'',
        hora:''
    })

    const navigate = useNavigate()
    const handleInputChange =(event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        });
    }

const saveForm = async (event) =>{
    event.preventDefault()
    await addDoc(collection(db,"clientes"),form)
    Swal.fire({
        icon: 'success',
        title: 'Mensaje',
        text: 'Registro de reservacion exitosa!',
      }).then(()=>{
        //   window.location.href = "/ListaReserva"
          navigate("/ListaReserva")
      })
}

    return (
        
        <>      
        <div id='cliente' className="offset-3 col-md-6 text-center">
            Reservación
        </div>
            <form onSubmit={saveForm}>
                <div className="offset-3 col-md-6">
                    <div className="form-group">
                        <label id='etiqueta'>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            name='nombre'
                            placeholder="Ingrese su nombre"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label id='etiqueta'>Cantidad</label>
                        <input
                            type="number"
                            className="form-control"
                            name='cantidad'
                            placeholder="Ingrese la cantidad de comensales"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label id='etiqueta'>Fecha</label>
                        <input
                            type="date"
                            className="form-control"
                            name='fecha'
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label id='etiqueta'>Hora</label>
                        <input
                            type="time"
                            className="form-control"
                            name='hora'
                            onChange={handleInputChange}
                            required
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