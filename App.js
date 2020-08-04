import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navigator from './src/Navigator';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import billsReducer from './store/reducers/bills';

const rootReducer = combineReducers({
  bills: billsReducer
});

const store = createStore(rootReducer);

// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';
//
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }
// export default createAppContainer(Navigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
