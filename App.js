/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
// import HomeScreen from './src/Screens/Home';
import dummy from './assets/data/dummy';
import Searchresult from './src/Screens/Searchresult';
import HomeDetails from './src/Components/HouseDetails';
import AreaSearch from './src/Screens/AreaSearch';
import Router from './src/Navigation/Router';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Router />
    </>
  );
};

export default App;
