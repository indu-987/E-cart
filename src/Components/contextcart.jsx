import { useContext } from "react";
import Items from "./Items";
import {CartContext} from './Cart'




const Contextcart = () => {
    const item =useContext(CartContext)


    return ( 
        <>
         <header>
                <div className="continue-shopping"> 
                <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                <h3>Continue Shopping</h3>

                </div>
            <div className="cart-icon">
                <img src="./images/cart.png" alt=""  />
                <p>7</p>

            </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">you have <span className="total-items-count">7 </span>items in cart</p>
                   <div className="cart-items">
                    <div className="cart-items-container">

                      {
                        item.map((CurItem)=>{
                            return <Items key={CurItem.id}  {...CurItem} />
                            
                        })
                      }
                        
                    </div>
                   </div>

                   
            </section>
            <div>
            <div className="card-total">
                    <h3>Cart total : <span>30000</span></h3>
                    <button>check out</button>
                    </div>
            </div>
        </>
     );
}
 
export default Contextcart;