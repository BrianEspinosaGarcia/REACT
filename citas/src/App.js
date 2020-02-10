import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';



function App() {

  // Citas en local storage 
  /* Recordar que en local storage se mantiene la informacion
  Mientras que en session storage se pierde en cuanto se cierra la pagina
   */
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  // Asi obtengo lo que hay almacenado
  if(!citasIniciales){
    citasIniciales = [];
  }

  // Arreglo de Citas: 
  const [citas, guardarCitas] = useState(citasIniciales);

  /* Use Effect para realizar ciertas operaciones cuando 
  el state cambia 
   //! Importante que este debe llevar un arreglo como segundo parametro siempre
  */
  useEffect(() => {
    
    // Se ejecuta al inicio pero tambien cuando el componente cambia 
    console.log('listo o algo en el state cambio de Citas ')
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);
  //! Esto de citas en el arreglo indica que citas es el estado por el cual estara pendiente de cambios o carga

  //Funcion que tome las citas actuales y agregue la nueva
  const crearCita = cita =>{
    guardarCitas([
        ...citas,
        cita
    ]);
  }

  //* Funcion que elimina una cita por su id
  const eliminarCita = id =>{
    let nuevasCitas = citas.filter( cita =>{
      return cita.id!==id;
      
    });
    guardarCitas(nuevasCitas);
  }



  return (
    <Fragment>
      <h1> Administrador de Pacientes </h1>

      <div className="container">
        <div className="row">
            <div className="one-half column">
               <Formulario
                // Los y las omunicaciones se dan del padre al hijo por los props
                crearCita={crearCita}
                //* Se pasa la funcion  por que asi ya tiene acceso desde el componente hijo
               />
                
            </div>
            <div className="one-half column">
                
                {citas.length === 0 ? <p className="alerta-error" > No tienes Citas agendadas </p> : <h2>Administra tus citas </h2>}
                {citas.map(cita=>(
                  <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />

                ))}
            </div>
        </div>

      </div>
   </Fragment>
  );
}

export default App;
