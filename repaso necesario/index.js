console.log('Mi primer ejercicio ');
// // var prob = 'Hola'

let perros =  ['Robert', 'manchas', 'hachi', 'chiquis', 'peregrino'];
var probi = {
    alert: 'Esta es un agregado',
    post: 'Esto es lo que le sigue'
}
let [ultimo] = [...perros].reverse();
//console.log(ultimo);
var mascotas = {
    primer: 'Perro',
    segu: 'gato',
    tercer: 'ave',
    cuarto: 'pez',
    partes: {
                acceso: 'Todo',
                temp: 'agresivo',
                come: 'poco',
                adoptado: {
                    activo: true,
                    calle: true,
                    tiempoFuera: 98
                }
            },
    ...probi
};
//console.log(Object.entries(mascotas));
//let {partes} = mascotas;
//let {adoptado} = mascotas.partes;
/* console.log(...perros);
console.log(mascotas); */
//console.log(mascotas);

// // let con = 9

/* Ahora vamos a practicar un poco las promesas. */

let primerP = new Promise((resolve, reject)=> {
    // Simulando la extraccion de una Appi, por eso colocamos un Set Time Out
    setTimeout(()=>{
        // Aqui dentro es todo lo que se haria para extraer cosa de la BD
        let descuento = true;
        if(descuento){
            resolve(perros);
        }else {
            reject('Ha ocurrido un error y se boto Reject');
        }
    },3000);
});

primerP.then(response => {
    console.log(response);
}).catch(e => console.log(e));