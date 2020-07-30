import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import prices from './prices.json'

export default function App() {
  const [croissant, setCroissant] = useState(0);
  const [coffee, setCoffee] = useState(0);
  const [cappuccino, setCappuccino] = useState(0);
  const [choc, setChoc] = useState(0);
  const [total, setTotal] = useState(0);

  const croissantPlus = () => {
    setCroissant(prevCroissant => prevCroissant + 1);
    setTotal(prevTotal => prevTotal + prices["croissant"]);
  }

  const coffeePlus = () => {
    setCoffee(prevCoffee => prevCoffee + 1);
    setTotal(prevTotal => prevTotal + prices["coffee"]);
  }

  const cappuccinoPlus = () => {
    setCappuccino(prevCappuccino => prevCappuccino + 1);
    setTotal(prevTotal => prevTotal + prices["cappuccino"]);
  }

  const chocPlus = () => {
    setChoc(prevChoc => prevChoc + 1);
    setTotal(prevTotal => prevTotal + prices["choc"]);
  }

  const calculatePrice = (number, item) => {
    let lineTotal = number * prices[item];
    return lineTotal;
  }

  const cancelOrder = () => {
    setTotal(0);
    setCroissant(0);
    setCappuccino(0);
    setCoffee(0);
    setChoc(0);
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        >Hello Mokus!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={cappuccinoPlus}>
            <Text>Cappuccino £{prices.cappuccino}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={coffeePlus}>
            <Text>Black coffee £{prices.coffee}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={croissantPlus}>
            <Text>Croissant £{prices.croissant}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={chocPlus}>
            <Text>Pain au choc £{prices.choc}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.orderTitle}>New Order:</Text>
          <Text style={styles.counter}>{croissant} Croissant £{calculatePrice(croissant, "croissant")}</Text>
          <Text style={styles.counter}>{coffee} Black coffee £{calculatePrice(coffee, "coffee")}</Text>
          <Text style={styles.counter}>{cappuccino} Cappuccino £{calculatePrice(cappuccino, "cappuccino")}</Text>
          <Text style={styles.counter}>{choc} Pain au choc £{calculatePrice(choc, "choc")}</Text>
          <Text style={styles.orderTitle}>Total: £{total}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={cancelOrder}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={cancelOrder}>
          <Text>Pay</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center'
  },
  counterContainer: {
    flexDirection: 'column'
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
    marginVertical: 10
  }
});
