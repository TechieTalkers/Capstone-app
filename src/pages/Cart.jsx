import React  from "react"
import {Context} from "../Context"
import CartItems from "../components/CartItems";

function Cart(){
    const [buttonText, setButtonText] = React.useState("Place Order")
    const {cartItems,emptyCart}=React.useContext(Context)

    const totalCost=5.99 * (cartItems.length)
    const cartItemElements=cartItems.map(item=>(
        <CartItems key={item.id} item={item} />
    ))

    function placeOrder(){
       
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000);
    
    }

    return(
        <main className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
           {
             cartItems.length > 0 ?
           <div className="order-button" onClick={placeOrder}>
                <button>{buttonText}</button>
            </div> : <p>You have no items in your cart.</p>
             }
    </main>
       
    )
}

export default Cart;
