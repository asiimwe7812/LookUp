/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TextInput, View, StyleSheet, FlatList, Text} from 'react-native';
import searchdata from '../../assets/data/searchdata';
import Entypo from 'react-native-vector-icons/Entypo';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
const AreaSearch = () => {
  const [inputText, setInputText] = useState('');
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyAXLPrwr6PJIe_PwBgx4qow5xvC0ude8G8',
          language: 'en',
        }}
      />
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Where do you want to Rent?"
      />
      <FlatList
        data={searchdata}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.textDescription}>{item.description}</Text>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={25} />
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default AreaSearch;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 18,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: 'lightorange',
  },
  iconContainer: {
    backgroundColor: '#FFD580',
    padding: 6,
    borderRadius: 5,
    marginRight: 2,
  },
  textDescription: {},
});
