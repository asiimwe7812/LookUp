/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, View} from 'react-native';
import dummy from '../../assets/data/dummy';
import HomeDetails from '../Components/HouseDetails';
const Searchresult = props => {
  return (
    <View>
      <FlatList
        data={dummy}
        renderItem={({item}) => <HomeDetails post={item} />}
      />
    </View>
  );
};

export default Searchresult;
