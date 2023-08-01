import { createContext } from "react";
import "../style/cart.css"
import Contextcart from "./contextcart";
import { products } from "./products";



export const CartContext = createContext();

const Cart = () => {


    return (  
        <>
          <CartContext.Provider value={products}>
           <Contextcart/>
           </CartContext.Provider>
           
        </>
    );
}
 
export default Cart;