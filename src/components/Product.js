import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Tile, Button, Avatar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

export default function Product(props) {
  return(
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.printProduct()}
      >
        <Image
          style={styles.image}
          source={{ uri: props.product.img }} />
        <Text>{props.product.name}</Text>
        <Text>£{props.product.price}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: 145,
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
  image: {
    width: 120,
    height: 120
  },

})
