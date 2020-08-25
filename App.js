import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import Navigator from './src/Navigator';
import orderReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  order: orderReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
        <Navigator />
    </Provider>
  );
}
