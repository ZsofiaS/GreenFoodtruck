import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import MaterialScreen from './views/MaterialScreen';
import ReportScreen from './views/ReportScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Green Food Truck',
      }
    },
    Materials: {
      screen: MaterialScreen,
      navigationOptions: {
        headerTitle: 'Materials',
      }
    },
    Reports: {
      screen: ReportScreen,
      navigationOptions: {
        headerTitle: 'Reports',
      }
    }
  },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white',
        headerRight: <Icon
          name="truck"
          size={40}
          color="white"
          style={{margin: 15}}
          />
      }
    }
);

export default createAppContainer(Navigator);
