import React from 'react'
import {FaChevronUp,FaChevronDown} from 'react-icons/fa'
import {connect} from 'react-redux'
import {DECREASE,INCREASE,TOGGLE_AMOUNT,removeItem} from '../actions'

const CartItem = ({title, price,image,amount,remove,increase,decrease,toggle}) => {
  return (
   <article className='list_item'>
   <img src={image} alt={title} />
   <div className="info">
<h4>{title}</h4>
<h4>${price}</h4>
<button type='button' className='btn remove-btn' onClick={()=>remove()}>remove</button>
   </div>
   <div className="btn-container">
    <button type='button' className='btn' onClick={()=>increase()}>
      <FaChevronUp /> 
    </button>
    <p className='amount'>{amount}</p>
    <button type='button' className='btn' onClick={()=>decrease()}>
      <FaChevronDown />
    </button>
   </div>
   </article>
  )
}
const mapDispatchToProps=(dispatch,ownProps)=>{
  const {id,amount}=ownProps
  return {
    remove:()=>{dispatch(removeItem(id))},
    decrease:()=>dispatch({type:DECREASE,payload:{id,amount}}),
    increase:()=>dispatch({type:INCREASE,payload:{id}}),
    toggle:(toggle)=>dispatch({type:TOGGLE_AMOUNT,payload:{id,toggle}})
}
}

export default connect(null,mapDispatchToProps)(CartItem)
