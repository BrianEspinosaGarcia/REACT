import React from 'react';
import './carrito.css';
import Producto from './Producto.js';
const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>
            Tu carrito de Compra
        </h2>
        {carrito.length === 0
        ?
        <p>No hay elementos en el carrito </p> 
        : carrito.map(producto =>(
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
  );

 
export default Carrito;