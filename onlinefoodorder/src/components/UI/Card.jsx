import classes  from './Card.module.css'
import React, {Fragment} from 'react'

const Card = (props)=>{
    return <Fragment>
        <div className = {classes.card}>{props.children}</div>
    </Fragment>
}
export default Card;