/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

const HomeDetails = props => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedroom}> {post.bed} Bed Room 🛏 Kitchen </Text>
      <Text style={styles.description}>{post.type}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>shs {post.oldPrice}</Text>
        <Text style={styles.newPrices}>shs {post.newPrice}</Text>
      </Text>
      <Text style={styles.totalPrices}>shs {post.totalPrice} Per month</Text>
    </View>
  );
};
export default HomeDetails;
