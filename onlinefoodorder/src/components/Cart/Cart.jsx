import React from 'react' 
import classes from './Cart.module.css'
import Modal from './Modal';

const Cart = (props)=>{
   
    const cartItem = <ul>{[{id: 'c1',name: 'shusi' ,amount: 2, price: 32.22}].map(item=>{<li>{item.name}</li>})}</ul>

    return <Modal onHide={props.onClose}>
        {cartItem}
        <div className = {classes.total}>
            <span>total Amount</span>
            <span>32.65</span>
        </div>
        <div className = {classes.action}>
            <button className = {classes['button--alt']} onClick={props.onClose} >Close</button>
            <button className = {classes['button']}>Order</button>
        </div>
    </Modal>
}
export default Cart;