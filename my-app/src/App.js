import React, {Fragment, useState} from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.js';
import Producto from './components/Producto.js';
import Carrito from './components/Carrito.js';

function App() {

  // Crear un listado de PRoductos 
    const [ productos, guardarProductos ] = useState([
      { id: 1, nombre: 'Camisa ReactJS', precio: 50},
      { id: 2, nombre: 'Camisa Vue JS ', precio: 40},
      { id: 3, nombre: 'Camisa Lit Element', precio: 30},
      { id: 4, nombre: 'Camisa Angular Framework', precio: 80}
    ]);
    /* useState Extrae dos valores, el primero es lo que extrae
      el segundo es una funcion que te ayuda a cambiar el estado 
      DEntro de los parentesis de la funcion se colocaran los valores 
      con los que se iniciara el componente  */
  // Obtener la fecha 
    const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();
  return (
      <Fragment>
        <Header 
          titulo='Tienda Virtual'
        />
        <h1> Lista de Productos </h1>
        {productos.map(producto=>(
          <Producto 
              key={producto.id} // importante para distinguir  a cada elemento
              producto={producto}
              carrito={carrito}
              productos={productos}
              agregarProducto={agregarProducto}
          />
        ))}
        <Carrito
            carrito={carrito}
            agregarProducto={agregarProducto}
        />

        <Footer 
          fecha ={fecha}
        />
      </Fragment>
  );
}

export default App;
