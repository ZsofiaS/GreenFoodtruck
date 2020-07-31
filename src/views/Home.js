import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import prices from '../prices.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import Product from '../components/Product';

const truck = <Icon name="truck" size={40} color="#00cc44" />;

export default function Home({navigation}) {
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
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text
          style={styles.title}
          >{truck}  Hello Mokus!
        </Text>
      </View>
      <View style={styles.productContainer}>
          <Product style={styles.product}/>
          <Product style={styles.product}/>
      </View>
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
        <Text style={styles.orderTitle}>New Order:</Text>
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
        <Text style={styles.orderTitle}>Total: £{total}</Text>
      </View>
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={cancelOrder}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={cancelOrder}>
          <Text>PAY</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => navigation.navigate('MaterialList')}
        title='Go to materials'
        />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    flexDirection: 'row'
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
    backgroundColor: 'gainsboro',
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
    color: 'black',
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
    marginVertical: 10,
  },
  checkoutButton: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'gainsboro',
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
    width: 200
  }
});
