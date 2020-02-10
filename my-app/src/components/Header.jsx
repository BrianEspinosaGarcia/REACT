import React from 'react';


export default function Header({titulo}) {
    /* Aqui puedo escribir codigo perfectamente funcioal de JS */
    //console.log(titulo)
    return(
        /* Aqui debe ir escrito solo un elemento a retornar */
        <React.Fragment>
            <h1 className="prueba-de-clase"> {titulo}  </h1>
        
        </React.Fragment>
    );
}

 