import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

export default class MaterialList extends React.Component {
    render() {
      return (
        <>
        <Header />
        <View>
            <Text>Materials</Text>
        </View>
        </>
      );
    }
}
