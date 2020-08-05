import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import prices from '../prices.json';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';
import Header from '../components/Header';
import OrderItem from '../components/OrderItem';
import {products} from '../../constants/Products';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, resetOrder } from '../../store/actions/orders';

export default function HomeScreen({navigation}) {
  const [total, setTotal] = useState(0);

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

  const calculateTotal = (product) => {
    setTotal(prevTotal => prevTotal + product.price);
    addProductHandler(product);
  }

  const cancelOrder = () => {
    setTotal(0);
    resetOrderHandler();
  }

  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(addProduct(product));
  }

  const resetOrderHandler = () => {
    dispatch(resetOrder());
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
        <Text style={styles.orderTitle}>Order</Text>
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
        <Text style={styles.orderTitle}>Total: £{totalAmount}</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={[styles.checkoutButton, styles.cancelButton]}
          onPress={cancelOrder}>
          <Text style={styles.buttonText}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.checkoutButton, styles.payButton]}
          onPress={cancelOrder}>
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
    marginVertical: 30
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
    marginVertical: 10,
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
    marginVertical: 20,
  },
  counter: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  orderTitle: {
    fontSize: 20,
    textAlign: 'left'
  },
  title: {
    marginVertical: 20,
    fontSize: 20
  },
  checkoutContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  checkoutButton: {
    marginVertical: 10,
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
    backgroundColor: 'red'
  },
  payButton: {
    backgroundColor: Colors.primaryColor
  }
});
