import { createStackNavigator } from 'react-navigation-stack';
import Home from './views/Home';
import MaterialList from './views/MaterialList';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { title: 'Home'}
    },
    MaterialList: {
      screen: MaterialList,
      navigationOptions: { title: 'Materials'}
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default Navigator;
