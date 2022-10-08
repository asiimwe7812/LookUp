/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AreaSearch from '../Screens/AreaSearch';
import Searchresult from '../Screens/Searchresult';
import ButtonNavigator from './ButtomNavigator';
import SearchResultTab from './SearchResultTabNavigator';
const Stack = createNativeStackNavigator();
const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          options={{headerShown: false}}
          component={ButtonNavigator}
        />
        <Stack.Screen name={'Search for free Places'} component={AreaSearch} />
        <Stack.Screen name={'New Places'} component={SearchResultTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
