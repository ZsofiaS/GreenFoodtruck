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

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
