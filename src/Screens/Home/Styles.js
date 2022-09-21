/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: 'orange',
    alignItems: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'orange',
    width: 200,
    alignContent: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 20,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  SearchButton: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 30,
    alignContent: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 200,
    marginRight: 20,
    flexDirection: 'row',
  },
  SearchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
