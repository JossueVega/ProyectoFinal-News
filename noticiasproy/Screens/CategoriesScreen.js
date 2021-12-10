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
      
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? 'black' : 'black' }}>
        
      </Text>
     
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={styles.category}>
              <Image source={{ uri: item.pic }} style={styles.categoryImage} />
              <Text
                style={{
                  ...styles.name,
                  color: darkTheme ? 'black' : 'black',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',

  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  categoryImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
  
});
