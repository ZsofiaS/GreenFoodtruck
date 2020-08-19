export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RESET_ORDER = 'RESET_ORDER';
export const SAVE_ORDER = 'SAVE_ORDER';

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, product: product };
}

export const resetOrder = () => {
  return { type: RESET_ORDER }
}

export const saveOrder = (products, total) => {
   return { type: SAVE_ORDER, products: products, total: total };
}
