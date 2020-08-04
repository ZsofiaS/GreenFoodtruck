export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (id) => {
  return { type: ADD_PRODUCT, productId: id};
}
