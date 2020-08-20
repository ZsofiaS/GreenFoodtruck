export const ADD_PRODUCT = 'ADD_PRODUCT';
export const RESET_ORDER = 'RESET_ORDER';
export const SAVE_ORDER = 'SAVE_ORDER';
export const SET_ORDERS = 'SET_ORDERS';
import OrderAdded from '../../models/OrderAdded';

export const fetchOrders = () => {
  return async dispatch => {
    const response = await fetch('https://green-food-truck.firebaseio.com/orders.json');

    const resData = await response.json();
    const loadedOrders = [];
    for (const key in resData) {
      loadedOrders.push(
        new OrderAdded(
          key,
          resData[key].products,
          resData[key].total,
          resData[key].date
        )
      )
    }

    let groupedOrders = loadedOrders.reduce((r, a) => {
      r[a["date"]] = r[a["date"]] || [];
      r[a["date"]].push(a);
      return r;
    }, Object.create(null));
    let dailyReports = [];
    for (const [date, orders] of Object.entries(groupedOrders)) {
      let total = 0;
      orders.forEach(order => {
        total = total + order["total"];
      })
      //console.log(`Date: ${date}, total: ${total}`);
      dailyReports.push({
        // [date]: total
        date: date,
        total: total
      });
      console.log("yo")
    }

    dispatch({type: SET_ORDERS, orders: loadedOrders, reports: dailyReports});
  }
}

export const addProduct = (product) => {
  return { type: ADD_PRODUCT, product: product };
}

export const resetOrder = () => {
  return { type: RESET_ORDER }
}

export const saveOrder = (products, total, date) => {
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
      date: date,
      id: resData.name,
    });
  }
}
