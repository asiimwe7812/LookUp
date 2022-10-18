/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
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

      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 15}}>
          About the App
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f1b04c',
          height: '50%',
          borderRadius: 15,
        }}>
        <Text style={{color: 'black', marginLeft: 5, marginTop: 15}}>
          Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto
          nihil explicabo perferendis quos provident delectus ducimus
          necessitatibus reiciendis optio tempora unde earum doloremque commodi
          laudantium ad nulla vel odio? Consequatur rerum amet fuga expedita
          sunt et tempora saepe? Iusto nihil explicabo perferendis quos
          provident delectus ducimus necessitatibus reiciendis optio tempora
          unde earum doloremque commodi laudantium ad nulla vel odio?
        </Text>
      </View>
      {/* <View style={{height: 20, width: 20}}>
        <Image source={require('../../../assets/images/Background.jpg')} />
      </View> */}
    </View>
  );
};

export default Profile;
