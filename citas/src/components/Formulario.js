import React, {Fragment, useState} from 'react'
import uuid from 'uuid/v4'
 import PropTypes from 'prop-types'


const Formulario = ({crearCita}) => {

    // Crear el state de Citas:
    const [cita, actualizarCita ] = useState({
        mascota:'',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, actualizarError ] = useState( false );

    // funcion que se ejecuta cada que se hace un cambio 
    const actualizarState = e=>{
       actualizarCita({
           ...cita,
           [e.target.name]: e.target.value
       });
    }
    const {mascota, propietario, fecha, hora, sintomas }= cita;
    // Cuando el usuario envia el formulario: ....
    const submitCita = (e)=>{
        e.preventDefault();
        // VAlidar antes de enviar .....
            if(mascota.trim() ===''|| propietario.trim() ==='' || fecha.trim() ===''||
              hora.trim() ==='' || sintomas.trim() ===''){
                actualizarError(true);
                return;
            }
        // Quitar el mensaje de error en caso de que este salga
        actualizarError(false);
        // Asignar una id [key]
        cita.id = uuid();
        
        //Crear la cita
            crearCita(cita);
        //Reiniciar el form
        
        actualizarCita({
            mascota:'',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        }) 
        
        console.log('Construyendo el envio del Formulario')

    }

    return (
        <Fragment>
            <h2> Crear Cita </h2>
            { error ?  <p className="alerta-error" > Todos los campos son obligatorios </p> :  null}
                <form
                    onSubmit={submitCita}
                >
                    <label> Nombre Mascota </label>
                    <input 
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange = {actualizarState}
                        value={mascota}
                        
                    />
                    <label> Nombre del Dueño </label>
                    <input 
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="Nombre Dueño de la mascota"
                        onChange = {actualizarState}
                        value={propietario}
                        
                    />
                    <label> Fecha </label>
                    <input 
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange = {actualizarState}
                       value={fecha}
                    />
                    <label> Hora </label>
                    <input 
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange = {actualizarState}
                       value={hora}
                    />
                    <label>Sintomas : </label>

                    <textarea
                     className="u-full-width"
                     name="sintomas"
                     onChange = {actualizarState}
                     value={sintomas}
                    ></textarea>
                    <button
                        type="submit"
                        className="u-full-width button-primary"
                    > Agregar Cita Programada</button>
                </form>
        </Fragment>
    );
}
Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}
export default Formulario;
