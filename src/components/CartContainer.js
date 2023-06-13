import React from 'react'
import CartItem from './CartItem'
import {CLEAR_CART,GET_TOTALS} from '../actions'
import {connect} from 'react-redux'

const CartContainer = ({cart=[],total,dispatch}) => {
  React.useEffect(()=>{
dispatch({type:GET_TOTALS})
  },[cart,dispatch])
 if(cart.length === 0){
  return <div className='empty'>
  <h2>Your cart </h2>
  <p>is currently empty</p>
  </div>
 }
  return (
    <main>
     {cart.map((item)=>{
      return <CartItem key={item.id} {...item} />
     })}
     <hr />
     <footer className='footer'>
<header>
  <h2>Total</h2>
  <h3>${total}</h3>
</header>
<button type='button' className='clear-btn' onClick={()=>dispatch({type:CLEAR_CART})}>clear cart</button>
     </footer>
    </main>

  )
}

const mapStateToProps=(state)=>{
  // es6
  // const {cart,total}=state;
  // return {cart,total}
  return {cart:state.cart,total:state.total}

}

export default connect(mapStateToProps)(CartContainer)
