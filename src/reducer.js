import {DECREASE,INCREASE,CLEAR_CART,REMOVE,GET_TOTALS,TOGGLE_AMOUNT} from './actions'
const reducer=(state,action)=>{
 if(action.type === CLEAR_CART){
   return {...state,cart:[]}
  }
  if(action.type === REMOVE){
 let tempCart=state.cart.filter(item=>item.id !== action.payload.id)
 return {...state,cart:tempCart}
  }
  if(action.type === DECREASE){
 let tempCart=[]
 if(action.payload.amount === 1){
tempCart = state.cart.filter(item=>item.id !== action.payload.id)
 }
 else{
  tempCart=state.cart.map((item)=>{
    if(item.id === action.payload.id){
     item = {...item,amount:item.amount - 1}
    }
    return item;
   })
 }
   return {...state,cart:tempCart}
  }
  if(action.type === INCREASE){
   let tempCart=state.cart.map((item)=>{
    if(item.id === action.payload.id){
     item = {...item,amount:item.amount + 1}
    }
    return item;
   })
  return {...state,cart:tempCart}
  }

if(action.type === GET_TOTALS){
let {total,amount}=state.cart.reduce((totals,value)=>{
const {price,amount}=value
 totals.amount +=amount;
 totals.total += (price*amount)
return totals
},{
 total:0,
 amount:0
})
total =parseFloat(total.toFixed(2))
return {...state,total,amount}
}
if(action.type === TOGGLE_AMOUNT){
 return {...state,cart:state.cart.map((cartItem)=>{
  if(cartItem.id === action.payload.id){
   if(action.payload.toggle === 'inc'){
    return cartItem={...cartItem,amount:cartItem.amount + 1}
   }
  }
  if(action.payload.toggle === 'dec'){
   return cartItem={...cartItem,amount:cartItem.amount - 1}
  }
  return cartItem;
 })}
}

  return state; 
}

export default reducer



// switch(action.type){
//  case CLEAR_CART:
//   return {...state,cart:[]};
// case INCREASE:
// return {...state,amount:state.amount+1}
// case DECREASE:
// return {...state,amount:state.amount-}
//   default: return state
// }