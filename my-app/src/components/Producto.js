import React, {Fragment} from 'react'


const Producto = ({producto, carrito, agregarProducto, productos }) => {

    console.log(carrito)
    const {nombre, precio, id } = producto;
    const seleccionarProducto = (id) =>{
        console.log(carrito)
        const producto = productos.filter(producto=> producto.id ===id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
        console.log(carrito);
    }
    const eliminarProducto = (id) =>{
        
        const nuevos = carrito.filter(producto=> producto.id !=id);
        
        agregarProducto(nuevos); 
       
        
    }
    
    // Agregar producto al Carrito 
    return ( 
        
        <Fragment>
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
               {productos
               ?
                    (<button
                            type="button"
                            onClick={()=>seleccionarProducto(id)}
                            >Comprar </button>
                    )
                 : 
                 (<button
                    type="button"
                    onClick={() => eliminarProducto(id)}
                    >Eliminar </button>
                )  
                }
        </Fragment>
     );
    }
 
export default Producto;