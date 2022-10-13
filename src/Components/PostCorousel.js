/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Post = props => {
  const post = props.post;
  const width = useWindowDimensions().width;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate('Post', {postId: post.id});
  };

  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image style={styles.image} source={{uri: post.image}} />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>shs{post.newPrice} </Text>
          </Text>
          <Text style={{fontWeight: 'bold'}}>{post.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    height: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default Post;
