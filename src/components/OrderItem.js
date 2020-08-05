import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OrderItem(props) {
  console.log(props)
  return(
    <View>
      <Text>{props.quantity}x {props.name} £{props.sum}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

});
