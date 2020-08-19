import {products} from '../../constants/Products';
import ProductAdded from '../../models/ProductAdded';
import OrderAdded from '../../models/OrderAdded';
import { ADD_PRODUCT }  from '../actions/orders';
import { RESET_ORDER } from '../actions/orders';
import { SAVE_ORDER } from '../actions/orders';

const initialState = {
  products: products,
  order: {},
  totalAmount: 0,
  orders: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const product = action.product;
      const productName = product.name;
      const productPrice = product.price;
      const productId = product.id;

      let productToBeAdded;

      if (state.order[productId]) {
        productToBeAdded = new ProductAdded(
          state.order[productId].quantity + 1,
          productPrice,
          productName,
          state.order[productId].sum + productPrice
        );
      } else {
        productToBeAdded = new ProductAdded(1, productPrice, productName, productPrice);
      }
      return {
          ...state,
          order: { ...state.order, [productId]: productToBeAdded },
          totalAmount: state.totalAmount + productPrice
        }
    case RESET_ORDER:
      return { ...state, order: {}, totalAmount: 0}
    case SAVE_ORDER:
      const currentOrder = action.products;
      const total = action.total
      const date = new Date().toString();
      let orderToBeAdded = new OrderAdded(currentOrder, total, date);
      return {
        ...state,
        order: {},
        totalAmount: 0,
        orders: [...state.orders, orderToBeAdded]}
    default:
      return state;
  }
  return state;
}

export default orderReducer;
