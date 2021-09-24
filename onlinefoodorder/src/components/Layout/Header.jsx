import React,{Fragment} from 'react'
import MealsImage from '../../assests/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props)=>{
    
    return <Fragment>
          <header className ={classes.header}>
             <h1>ReactMeals</h1>
           <HeaderCartButton onShow={props.onShow}/>
          </header>
          <div className={classes['main-image']}>
              <img src={MealsImage} alt='A table full of delicious food'/>
          </div>
        </Fragment>

}
export default Header;