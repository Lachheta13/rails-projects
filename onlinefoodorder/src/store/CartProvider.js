import React from 'react'
import CartContext from "./cart-context";

const CartProvider = (props)=> {

    const addItemToCardHandler = item => {};
    
    const removeItemFromCardHandler = item => {};
    
    const cartContext = {
    items: [],
    totalItem: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler
    }
    
    return ( <CartContext.provider value = {cartContext}>
        {props.children}
    </CartContext.provider>
    )
}
export default CartProvider;