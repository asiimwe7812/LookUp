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
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
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

export default withAuthenticator(App);
