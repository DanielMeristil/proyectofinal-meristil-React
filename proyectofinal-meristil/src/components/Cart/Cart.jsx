import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

  const {cart,total,clearCart,removeItem} = useContext(CartContext);

  console.log(cart);
  return (
    <div>

      <h1>Nuestro Carrito </h1>

    {
      cart.length == 0 ?
      <div>
        <h2>Carrito vacio</h2>
        <Link to={"/"}>Ir al inicio</Link>
      </div>
      :
      <div>
        {
          cart.map((p) =>(
            <CartItem key={p.producto.id} cartItem={p} removeItem={removeItem}/>
          ))
        }
          <h2>Valor total producto: ${total}</h2>
          <button onClick={()=>{clearCart()}}>Limpiar Carrito</button>
          <Link to={"/checkout"}>Terminar tu compra</Link>
        
      </div>
      }

      </div>
  );
};

export default Cart;
