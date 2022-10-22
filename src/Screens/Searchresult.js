/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import dummy from '../../assets/data/dummy';
import {API, graphqlOperation} from 'aws-amplify';
import {listNewPlaces} from '../graphql/queries';
import HomeDetails from '../Components/HouseDetails';
const Searchresult = props => {
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResults = await API.graphql(graphqlOperation(listNewPlaces));
        console.log(postResults);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, []);
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
