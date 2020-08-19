import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OrderItem(props) {
  return(
    <View style={styles.item}>
      <Text style={styles.text}>{props.quantity}x </Text>
      <Text style={styles.text}>{props.name} </Text>
      <Text style={styles.text}>£{props.sum}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
