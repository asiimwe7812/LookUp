/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Auth} from 'aws-amplify';

const Profile = props => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        onPress={logout}
        style={{
          borderRadius: 15,
          height: 40,
          width: '50%',
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
