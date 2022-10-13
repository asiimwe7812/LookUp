/* eslint-disable prettier/prettier */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Searchresult from '../Screens/Searchresult';
import Searchmap from '../Screens/Searchmap';
const Tab = createMaterialTopTabNavigator();

const SearchResultTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarIndicatorStyle: {
          backgroundColor: 'orange',
        },
      }}>
      <Tab.Screen name="Search Places" component={Searchresult} />
      <Tab.Screen name="Map" component={Searchmap} />
    </Tab.Navigator>
  );
};
export default SearchResultTab;
