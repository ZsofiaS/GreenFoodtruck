export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RESET_BILL = 'RESET_BILL';

export const addProduct = (id) => {
  return { type: ADD_PRODUCT, productId: id};
}

export const resetBill = () => {
  return { type: RESET_BILL }
}
