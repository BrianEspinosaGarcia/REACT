

const descargaUsuarios = cantidad => new Promise((resolve, reject)=> {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a Ajax
    const xhr = new XMLHttpRequest();
    // Abriendo la conexion 
    xhr.open('GET', api, true);

    //Onload
    xhr.onload = ()=>{
        if(xhr.status === 200) {
            resolve( JSON.parse(xhr.responseText).results );
        }
        else { 
            reject(Error(xhr.statusText) );
        }
    }

    // Opcional ( on error )
    xhr.onerror = (error) => reject( error);

    // Enviando los datos al Front 
    xhr.send();

});

descargaUsuarios(40).then(
    miembros => console.log(miembros),
    error => console.error(new Error('Hubo un error botado en el Then '+ error))
);