import {products} from '../../constants/Products';

const initialState = {
  products: products,
  bill: []
}

const billsReducer = (state = initialState, action) => {
  return state;
}

export default billsReducer;
