import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const truck = <Icon name="truck" size={40} color="#00cc44" />;

const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{truck} Green Food Truck</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#00cc44'
  },
  headerTitle: {
    fontSize: 20
  }
})
export default Header;
