import React,{useState,useEffect,useContext} from "react";
import { collection,addDoc,updateDoc,doc,getDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {

    const[nombre,setNombre] = useState("");
    const[apellido,setApellido] = useState("");
    const[telefono,setTelefono] = useState("");
    const[email,setEmail] = useState("");
    const[emailConfirmacion,setEmailConfirmacion] = useState("");
    const[error,setError] = useState("");
    const[ordenId, setOrdenId] = useState("")

    const{cart,total,cantidadTotal,clearCart} = useContext(CartContext)

    const manejadorFormulario = (event) => {

        event.preventDefault()
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Todos los campos son obligatorios")

            return;
        }
        if(email !== emailConfirmacion){
            setError("email no coincide")
            return;
        }

        const orden = {
            items: cart.map((producto)=>({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.producto.cantidad,
                
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async(productoOrden) =>{
                const productoRef = doc(db, "Productos el y ella salon beauty",productoOrden)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef,{
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=>{
            addDoc(collection(db,"ordenes"),orden)
            .then((docRef)=>{
                setOrdenId(docRef.id);
                clearCart()
            })
            .catch((error)=>{
                setError("se detecto un error al crear la orden")
            })
        })

        .catch((error)=>{
        setError("no se puede actualizarr")
        
        })
    }
    return (
        <div>
          <h2>Ingresar tus datos</h2>
          {
          cart.map((producto) => {
            <div key={producto.producto.id}>
            <p>
                {producto.producto.nombre} x {producto.cantidad}
            </p>
            <p>producto.producto.precio</p>
            </div>
          })
        }

        <form action="">

        <div>
            <label html="">nombre</label>
            <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div>
            <label html="">apellido</label>
            <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
        </div>

        <div>
            <label html="">telefono</label>
            <input type="number" onChange={(e)=>setTelefono(e.target.value)}/>
        </div>

        <div>
            <label html="">email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
            <label html="">emailConfirmacion</label>
            <input type="emailConfirmacion" onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
        </div>
          
          {error && <p style={{color: "red"}}>{error}</p>}
          <button type="submit">compra</button>

          {
            ordenId && (
                <p>gracias por tu comra: {ordenId}</p>
            )
          }


        </form>
        </div>
    );
};

export default Checkout;