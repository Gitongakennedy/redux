import {FaShoppingCart} from 'react-icons/fa'
import { connect} from 'react-redux'

const Navbar = ({amount}) => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
      <h3>Curio Coffee</h3>
      <div className="container">
      <p className="itemsInCart">{amount}</p>
      <FaShoppingCart className='icon' />
      </div>

      </div>
    </nav>
  )
}

const mapStateToProps=(state)=>{
return {amount:state.amount}
}

export default connect(mapStateToProps)(Navbar) 
