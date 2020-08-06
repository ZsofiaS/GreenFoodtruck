import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Navigator from './src/Navigator';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import orderReducer from './store/reducers/orders';
import { firestoreReducer, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, firebaseReducer } from "react-redux-firebase";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config/firebase.js';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rootReducer = combineReducers({
  order: orderReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const rrfConfig = {
  orderProfile: 'orders',
  useFirestoreForProfile: true
}

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}



export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Navigator />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}
