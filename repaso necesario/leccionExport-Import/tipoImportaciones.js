import { nombreDesarrollador, crearPerfil } from './tiposExportaciones.js';
// De esa forma debo de importar en donde yo utilizare esta parte de codogo de la siguiente 
// forma:
import Videojuego from './ClaseExportada.js';
import ComoSEa from './tiposExportaciones.js';
import VideoJuego from './ClaseExportada.js';
/*  Aqui ya no se ocuparia las llaves por que el
 default hace referencia a que solo se sacara 
de ese lugar eso  por lo cual ya no son necesarias
PERO DEBO AGREGAR TYPE = MODULE EN EL USO DE EL ARCHIVO */
console.log(crearPerfil('Daniel Espinosa', ': =>Tarea Ayudar a Eric, estudiar y aprender un nuevo Framework '));
console.log(nombreDesarrollador);
console.log(ComoSEa);

const blockB = new VideoJuego('HAlo Infinyt', 4, 'First PErson');
console.log(blockB.showData());