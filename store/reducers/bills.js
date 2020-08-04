import {products} from '../../constants/Products';
import { ADD_PRODUCT }  from '../actions/bills';

const initialState = {
  products: products,
  bill: []
}

const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const product = state.products.find(product => product.id === action.productId);
      return { ...state, bill: state.bill.concat(product)}
    default:
      return state;
  }
  return state;
}

export default billsReducer;
