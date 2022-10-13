/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Post from '../Components/PostCorousel';
import Detailed from '../../assets/data/Detailed';
import {useRoute} from '@react-navigation/native';

const PostScreen = props => {
  const route = useRoute();
  console.log(route.params);
  const post = Detailed.find(place => place.id === route.params.postId);
  return (
    <View style={{backgroundColor: 'orange'}}>
      <Post post={post} />
    </View>
  );
};
export default PostScreen;
