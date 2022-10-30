import '../Reserva/Reserva.css'
import { collection,addDoc} from 'firebase/firestore' 
import { useState } from 'react'
import { db } from '../../firebase';
import Swal from 'sweetalert2'

function Reserva() {
  
    const [form,setForm] = useState({
        nombre:'',
        cantidad:'',
        fecha:'',
        hora:''
    })

    const handleInputChange =(event) =>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        });
    }

const saveForm = async (event) =>{
    event.preventDefault()
    // console.log(form);
    await addDoc(collection(db,"clientes"),form)
    Swal.fire({
        icon: 'success',
        title: 'Mensaje',
        text: 'Registro de reservacion exitosa!',
      }).then(()=>{

          window.location.href = "/ListaReserva"
      })
}

    return (
        
        <>  
    
        <div id='cliente' className="offset-3 col-md-6 text-center">
            Formulario de reservacion
        </div>
            {/* <code>{JSON.stringify(form)}</code> */}
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

            {/* <form >
          <div className='offset-3 col-md-6'>
            <div className='form-group'>
              <label>Nombre</label>
              <input className="form-control" type="text" placeholder="Ingresa tu nombre" name="nombre" required />
            </div>
            <div className='form-group mt-3'>
              <label>Cantidad</label>
              <input className="form-control" type="number" placeholder="Ingresa la cantidad"  name="cantidad" required />
            </div>
            <div className='form-group mt-3'>
              <label>Fecha</label>
              <input className="form-control" type="date"  name="fecha" required />
            </div>
            <div className='form-group mt-3'>
              <label>Hora</label>
              <input className="form-control" type="time" name="hora" required />
            </div>
            <button className="btn btn-primary mt-4" type="submit">Agregar</button>
          </div>
        </form> */}
        </>
    );
}

export default Reserva;