/* eslint-disable prettier/prettier */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import HomeScreen from '../Screens/Home';
import Profile from '../Screens/Profile';
import MessagesScreen from '../Screens/Messaging';
const Tab = createBottomTabNavigator();
const ButtonNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOption={{
        activeTintColor: 'orange',
      }}>
      <Tab.Screen
        name={'LookUp'}
        component={HomeScreen}
        // component={PostScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="search" size={25} color={'orange'} />
          ),
        }}
      />
      <Tab.Screen
        name={'Message'}
        component={MessagesScreen}
        options={{
          tabBarIcon: ({color: string}) => (
            <Feather name="message-square" size={25} color={'orange'} />
          ),
        }}
      />
      <Tab.Screen
        name={'Account'}
        component={Profile}
        options={{
          tabBarIcon: ({color: string}) => (
            <EvilIcons name="user" size={25} color={'orange'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default ButtonNavigator;
