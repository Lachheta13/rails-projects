import React,{useContext}  from 'react'
import CartIcon from '../Cart/CatyIcone'
import classes  from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
const HeaderCartButton = (props)=>{
   
    const cardCtx = useContext(CartContext);
    const numberOfCartItems = cardCtx.items.reduce((curNumber,item)=>{return curNumber + item.amount},0);

    return <React.Fragment>
    <button className={classes.button} onClick={props.onShow}>
        <span className = {classes.icon}> <CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    </React.Fragment>


}
export default HeaderCartButton;