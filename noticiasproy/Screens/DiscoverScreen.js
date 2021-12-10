import React, { useContext } from 'react'; 
import {Dimensions, Image, StyleSheet,Text,TextInput,TouchableOpacity,View,} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { categories, sources } from '../API/api';
import { NewsContext } from '../API/Context';
import Search from '../components/Search';

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      <Search />
     
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  
  
});
