import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
        >Hello Mokus!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}>
            <Text>Croissant</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Text>Coffee</Text>
          </TouchableOpacity>
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
  title: {
    marginVertical: 10
  }
});
