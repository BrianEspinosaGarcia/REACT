/* Aqui se ilustrara y explicara los tipos de Exportaciones - Importaciones para 
un archivo o funcion de JS */

// Primer ejemplo de Exportacion 

export const nombreDesarrollador = 'Daniel Espinosa Garcia';
// De esta forma obligo a utilizar {} para la importacion para especificar que requiero.
export const crearPerfil = (nombre, encargo)=>{
    return `Este es el template litereal desde un Export
            donde informo que ${nombre}, esta encargado de 
            las siguientes tareas ${encargo}
     `;
}

const lenguajeDesarrollo = "Este es un archivo sin llaves para configurar";
//export default lenguajeDesarrollo; => Esto es solo para exportar una cosa por default
const lenguajeFavorito =  "Mi lenguaje favorito aun no lo elijo pero me gusta JS";
const lenguajeAprender = " Mi lenguaje por aprender es PY";
// Puedo exportar por default varias cosas como ejemplo:
export default {
    lengDes : lenguajeDesarrollo,
    fav: lenguajeFavorito,
    aprender: lenguajeAprender
}
// Solo puedo tener un xport Default

