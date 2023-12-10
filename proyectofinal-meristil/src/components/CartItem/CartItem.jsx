import React from "react";
const CartItem = ({cartItem,removeItem}) => {
    return (
        <div key={cartItem.producto.id}>
        <img src={cartItem.producto.img} alt={cartItem.producto} />
        <h1>{cartItem.producto.nombre}</h1>
        <p>{cartItem.producto.precio}</p>
        <p>{cartItem.producto.stock}</p>
        <p>{cartItem.producto.descripcion}</p>
        <p>{cartItem.cantidad}</p>
        <p>{cartItem.cantidad*cartItem.producto.precio}</p>
        <button onClick={()=>{removeItem(cartItem.producto.id)}}>Eliminar producto</button>
        </div>
         
    );
};

export  default CartItem;

