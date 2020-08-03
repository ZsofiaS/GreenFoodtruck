import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './views/HomeScreen';
import MaterialScreen from './views/MaterialScreen';
import Colors from '../constants/Colors';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home'
      }
    },
    Materials: {
      screen: MaterialScreen,
      navigationOptions: {
        headerTitle: 'Materials'
      }
    }
  },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: 'white'
      }
    }
);

export default createAppContainer(Navigator);
