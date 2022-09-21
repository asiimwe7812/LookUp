/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    fontSize: 14,
    color: 'orange',
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  prices: {
    fontSize: 18,
  },
  oldPrices: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  newPrices: {
    fontWeight: 'bold',
  },
  totalPrices: {
    fontWeight: 'bold',
    color: 'black',
  },
});
export default styles;
