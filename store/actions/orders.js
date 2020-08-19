export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RESET_ORDER = 'RESET_ORDER';
export const SAVE_ORDER = 'SAVE_ORDER';

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, product: product };
}

export const resetOrder = () => {
  return { type: RESET_ORDER }
}

export const saveOrder = (products, total, date = new Date()) => {
  return async dispatch => {
    //asyn code w/ Redux Thunk
    const response = await fetch('https://green-food-truck.firebaseio.com/orders.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        products,
        total,
        date
      })
    });
    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: SAVE_ORDER,
      products: products,
      total: total,
      date: date
    });
  }
}
