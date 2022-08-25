import React from "react"
import {Context} from "../Context"



function CartItems({item}){
    const {removeFromCart}=React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)
    const deleteBinClass= hovered ? "ri-delete-bin-fill" :"ri-delete-bin-line"

    return(
        <div className="cart-item">
           <i className={deleteBinClass} onMouseEnter={()=>(setHovered(true))} onMouseLeave={()=>(setHovered(false))} onClick={()=>removeFromCart(item.id)}></i>
            <img src={item.url} width="130px"  alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItems