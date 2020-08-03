import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import prices from '../prices.json';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';
import Header from '../components/Header';
import {products} from '../../constants/Products';
import Colors from '../../constants/Colors';

export default function HomeScreen({navigation}) {
  const [total, setTotal] = useState(0);

  const calculateTotal = (price) => {
    setTotal(prevTotal => prevTotal + price)
  }

  const cancelOrder = () => {
    setTotal(0);
  }

  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <View style={styles.productContainer}>
        {
          products.map((product, i) => {
            return(
              <View key={i}>
                <Product product={product} printProduct={() => calculateTotal(product.price)}/>
              </View>
            )
          })
        }
      </View>
      {/*
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={cappuccinoPlus}>
          <Text style={styles.buttonText}>Cappuccino £{prices.cappuccino}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={coffeePlus}>
          <Text style={styles.buttonText}>Black coffee £{prices.coffee}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={croissantPlus}>
          <Text style={styles.buttonText}>Croissant £{prices.croissant}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={chocPlus}>
          <Text style={styles.buttonText}>Pain au choc £{prices.choc}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.counterContainer}>
        {croissant > 0 && (
          <Text style={styles.counter}>{croissant} Croissant £{calculatePrice(croissant, "croissant")}</Text>
        )}
        {coffee > 0 && (
          <Text style={styles.counter}>{coffee} Black coffee £{calculatePrice(coffee, "coffee")}</Text>
        )}
        {cappuccino > 0 && (
            <Text style={styles.counter}>{cappuccino} Cappuccino £{calculatePrice(cappuccino, "cappuccino")}</Text>
        )}
        {choc > 0 && (
            <Text style={styles.counter}>{choc} Pain au choc £{calculatePrice(choc, "choc")}</Text>
        )}

      </View>
      */}
      <View style={styles.counterContainer}>
        <Text style={styles.orderTitle}>Total: £{total}</Text>
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
