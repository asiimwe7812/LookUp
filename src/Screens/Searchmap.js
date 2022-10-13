/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList} from 'react-native';
import MapView from 'react-native-maps';
import dummy from '../../assets/data/dummy';
import Post from '../Components/PostCorousel';
import CustomMarker from '../Components/CustomMarker';

const Searchmap = props => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(0);
  const flatlist = useRef();
  const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 70});
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });
  // const width = useWindowDimensions.width;
  useEffect(() => {
    if (!selectedPlaceId || flatlist) {
      return;
    }
    const Index = dummy.findIndex(place => dummy.id === selectedPlaceId);
    flatlist.current.scrollToIndex({Index});
    const selectedPlace = dummy[Index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
    };
    map.current.animateToRegion(region);
    console.warn(data, 'Scroll to' + selectedPlaceId);
  }, [selectedPlaceId]);

  return (
    <View style={{height: '100%', width: '100%'}}>
      <MapView
        ref={map}
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {dummy.map(place => (
          <CustomMarker
            key={place.id}
            coordinate={{latitude: 0, longitude: 0}}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', buttom: 30}}>
        <FlatList
          ref={flatlist}
          data={dummy}
          horizontal
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
          // snapToInterval={width}
          snapToAlignment={'center'}
          // decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Post post={item} />}
        />
      </View>
    </View>
  );
};
export default Searchmap;
