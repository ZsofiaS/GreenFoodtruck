import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [croissant, setCroissant] = useState(0);
  const [coffee, setCoffee] = useState(0);

  const croissantPlus = () => {
    setCroissant(prevCroissant => prevCroissant + 1)
  }

  const coffeePlus = () => {
    setCoffee(prevCoffee => prevCoffee + 1)
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        >Hello Mokus!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={croissantPlus}>
            <Text>Croissant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={coffeePlus}>
            <Text>Coffee</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{croissant}</Text>
          <Text style={styles.counter}>{coffee}</Text>
        </View>
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
    flexDirection: 'row'
  },
  counter: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    marginVertical: 10
  }
});
