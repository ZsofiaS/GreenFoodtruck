import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import prices from '../prices.json';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import {products} from '../../constants/Products';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, resetOrder, saveOrder, fetchOrders } from '../../store/actions/orders';
import { useFirebase } from 'react-redux-firebase';

export default function HomeScreen({navigation}) {
  const [total, setTotal] = useState(0);
  const firebase = useFirebase();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const availableProducts = useSelector(state => state.order.products);
  const totalAmount = useSelector(state => state.order.totalAmount);
  const addedProducts = useSelector(state => {
    const addedProductsArray = [];
    for (const key in state.order.order) {
      addedProductsArray.push({
        productId: key,
        productName: state.order.order[key].name,
        productPrice: state.order.order[key].price,
        quantity: state.order.order[key].quantity,
        sum: state.order.order[key].sum
      });
    }
    return addedProductsArray;
  });

  const orders = useSelector(state => state.order.orders);

  const calculateTotal = (product) => {
    setTotal(prevTotal => prevTotal + product.price);
    addProductHandler(product);
  }

  const cancelOrder = () => {
    //setTotal(0);
    resetOrderHandler();
  }

  const payForOrder = () => {
    saveOrderHandler(addedProducts, totalAmount, new Date());
    console.log(orders);
  }

  const addProductHandler = (product) => {
    dispatch(addProduct(product));
  }

  const resetOrderHandler = () => {
    dispatch(resetOrder());
  }

  const saveOrderHandler = (products, total, date) => {
    dispatch(saveOrder(products, total, date));
  }

  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>

      <View style={styles.productContainer}>
        {
          availableProducts.map((product, i) => {
            return(
              <View key={i}>
                <Product product={product} printProduct={() => calculateTotal(product)}/>
              </View>
            )
          })
        }
      </View>
      <View style={styles.counterContainer}>
        <Text style={styles.orderTitle}>Order details:</Text>
        {
          addedProducts.map((product, id) => {
            return(
              <OrderItem
                key={product.productId}
                name={product.productName}
                price={product.productPrice}
                quantity={product.quantity}
                sum={product.sum}
                />
            )
          })
        }
        <Text style={styles.total}>Total: £{totalAmount}</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={[styles.checkoutButton, styles.cancelButton]}
          onPress={cancelOrder}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.checkoutButton, styles.payButton]}
          onPress={payForOrder}>
          <Text style={styles.buttonText}>PAY</Text>
        </TouchableOpacity>
        {/*
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate('Materials')}>
            <Text>MATERIALS</Text>
        </TouchableOpacity>
        */}
      </View>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  },
  scrollContainer: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  productContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap'
  },
  product: {
    flexDirection: 'column'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
  },
  counterContainer: {
    flexDirection: 'column',
    // marginVertical: 5,
  },
  counter: {
    // marginVertical: 5,
    marginHorizontal: 10,
  },
  orderTitle: {
    fontSize: 20,
    textAlign: 'left',
    marginVertical: 5
  },
  total: {
    fontSize: 20,
    textAlign: 'right',
    marginVertical: 5
  },
  title: {
    marginVertical: 5,
    fontSize: 20
  },
  checkoutContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  checkoutButton: {
    marginVertical: 5,
    marginHorizontal: 15,
    backgroundColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
    width: 140,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cancelButton: {
    backgroundColor: '#cc0000'
  },
  payButton: {
    backgroundColor: Colors.primaryColor
  }
});
