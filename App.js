/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import Router from './src/Navigation/Router';
import SplashScreen from 'react-native-splash-screen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => React$Node = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  //   setTimeout(1000);
  // }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Router />
    </>
  );
};

export default withAuthenticator(App);
