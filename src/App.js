
// components
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'

import cartItems from './data'
import {legacy_createStore} from 'redux'

import reducer from './reducer'
import { Provider } from 'react-redux'

// initial store
const initialStore={
  cart:cartItems,
  total:0,
  amount:0
}
// store
const store=legacy_createStore(reducer,initialStore)

function App() {
  return (
  <Provider store={store}>
  <Navbar  />
  <CartContainer />
  </Provider>
  );
}

export default App;
