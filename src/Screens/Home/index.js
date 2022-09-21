/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ImageBackground, Text, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/Background.jpg')}
        style={styles.Image}>
        <Pressable
          style={styles.SearchButton}
          onPress={() => navigation.navigate('Search for free Places')}>
          <Text style={styles.SearchButtonText}>Search for free Places </Text>
          <Fontisto name="search" size={25} color={'orange'} />
        </Pressable>
        <Text style={styles.title}>Looking for Rooms for Rent ?</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('New Places')}>
          <Text style={styles.ButtonText}>View Places for Rent Now</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
